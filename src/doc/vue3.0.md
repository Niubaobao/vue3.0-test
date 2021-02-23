## 组件渲染

- 组件是对 dom 树的抽象，组件的模板决定组件生成的 Dom 标签

### 一个组件要想真正的渲染生成 dom 需要经历

- 创建 vnode --> 渲染 vnode --> 生成 dom
- vnode（一个可以描述组件的 javaScript 对象）

```
<button class='btn' style='width:100px;height:50px'>click me</button>

//我们用vnode来描述上面的button

const vnode = {
  type:'button',
  props:{
    'class':'btn',
    style:{
      width:'100px',
      height:'50px'
    }
  },
  children:'click me'
}
```

- vnode 优点：抽象化 跨平台

### Reactive API

### computed

通过以上分析，我们可以看出 computed 计算属性有两个特点：

延时计算，只有当我们访问计算属性的时候，它才会真正运行 computed getter 函数计算；

缓存，它的内部会缓存上次的计算结果 value，而且只有 dirty 为 true 时才会重新计算。如果访问计算属性时 dirty 为 false，那么直接返回这个 value。

### ------------------->

Composition API 它主要用来优化代码逻辑的组织和复用

## setup 组件渲染前的初始化过程

```
<template>
  <p>{{ msg }}</p>
</template>
<script>
export default {
  data() {
    msg: 1
  }
}
</script>
```

2.x
在组件初始化的时候 data 中定义的 msg 在组件内部是存储在 this.\_data 上的而模板渲染的时候访问 this.msg，实际上访问的是 this.\_data.msg，这是因为 Vue.js 2.x 在初始化 data 的时候，做了一层 proxy 代理。
3.0
为了方便维护，我们把组件中不同状态的数据存储到不同的属性中，比如存储到 setupState、ctx、data、props 中。我们在执行组件渲染函数的时候，为了方便用户使用，会直接访问渲染上下文 instance.ctx 中的属性，所以我们也要做一层 proxy，对渲染上下文 instance.ctx 属性的访问和修改，代理到对 setupState、ctx、data、props 中的数据的访问和修改

当我们访问 instance.ctx 渲染上下文中的属性时，就会进入 get 函数

```

```

### get

在 get 函数中 首先判断 key 不以 $ 开头的情况，这部分数据可能是 setupState、data、props、ctx 中的一种，ctx 包括了计算属性、组件方法和用户自定义的一些数据
如果 key 不以 $ 开头，那么就依次判断 setupState、data、props、ctx 中是否包含这个 key，如果包含就返回对应值

我们可以看到这里定义了 accessCache 作为渲染代理的属性访问缓存，缓存的作用，组件在渲染时会经常访问数据进而触发 get 函数，这其中最昂贵的部分就是多次调用 hasOwn 去判断 key 在不在某个类型的数据中，但是在普通对象上执行简单的属性访问相对要快得多。所以在第一次获取 key 对应的数据后，我们利用 accessCache[key] 去缓存数据，下一次再次根据 key 查找数据，我们就可以直接通过 accessCache[key] 获取对应的值，就不需要依次调用 hasOwn 去判断了

### set

当我们修改 instance.ctx 渲染上下文中的属性的时候，就会进入 set 函数
函数主要做的事情就是对渲染上下文 instance.ctx 中的属性赋值，它实际上是代理到对应的数据类型中去完成赋值操作的。这里仍然要注意顺序问题，和 get 一样，优先判断 setupState，然后是 data，接着是 props

执行 setup
执行 setup 结果保存到 setupResult
当 setupResult 是一个对象的时候，我们把它变成了响应式并赋值给 instance.setupState，这样在模板渲染的时候，依据前面的代理规则，instance.ctx 就可以从 instance.setupState 上获取到对应的数据，这就在 setup 函数与模板渲染间建立了联系
党 setupResult 是个函数的时候 instance.render = setupResult

初始化组件---》创建组件实例---》设置组件实例---》初始化 props---》初始化插槽---》设置稳定组件实例---》创建渲染上下文代理---》创建 setup 函数上下文---》执行 setup 函数获取结果--->处理 setup 函数执行结果---》完成组件实例设置---》标准化模板或者渲染函数---》兼容 options api
