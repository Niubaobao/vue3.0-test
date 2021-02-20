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
