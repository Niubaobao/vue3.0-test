import Watcher from './observer/watcher'
import { patch } from './vdom/patch'
export function mountComponent(vm, el) {
  // 数据变化后  会再次调用
  let updateComponent = () => {
    //调用render 生成虚拟dom
    vm._update(vm._render()) //后续更新可以调用updateComponent
    // 虚拟dom 生成真实dom
  }
  // 第一次需要调用一次
  // updateComponent()
  new Watcher(vm, updateComponent(), () => {
    console.log('视图更新')
  }, true)//他是一个渲染的watcher
}


export function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode) {
    const vm = this
    console.log(vnode, 'update')
    // 既有初始化  也有更新
    vm.$el = patch(vm.$el, vnode)
  }


  // 观察者模式 属性是被观察者~ 
}