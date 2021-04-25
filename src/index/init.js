import { compileToFunction } from "./compiler/index"
import { initState } from "./initState"
import { mountComponent } from "./lifecycle"

// 
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    // data el
    const vm = this // 保证vm是当前实例
    vm.$options = options //  后面会对options拓展

    // 对数据进行初始化   watch data props

    initState(vm) //vm.$options data
    // 
    if (vm.$options.el) {
      // 将数据挂载到模板上
      vm.$mount(vm.$options.el)
    }
  }

  Vue.prototype.$mount = function (el) {
    el = document.querySelector(el)
    const vm = this;
    const options = vm.$options
    //将模板转换成渲染函数  =》dom vnode diff 更新
    if (!options.render) { //render函数的优先级是最高的 
      let template = options.template
      if (!template && el) { // 如果 没有render 就看有没有template  如果没有template  就取出el的内容作为模板
        template = el.outerHTML // 返回字符串
        let render = compileToFunction(template)
        options.render = render
      }
    }
    //  options.render
    // console.log(options.render)   //调用render 渲染成dom 替换掉页面的内容
    mountComponent(vm, el) //组件的挂载
  }

}