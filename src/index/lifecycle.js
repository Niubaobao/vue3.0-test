export function mountComponent(vm, el) {
  // 数据变化后  会再次调用
  let updateComponent = () => {
    //调用render 生成虚拟dom

    vm._update(vm._render()) //后续更新可以调用updateComponent
    // 虚拟dom 生成真实dom
  }
  // 第一次需要调用一次
  updateComponent()
}


export function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode) {
    console.log('update')
  }
}