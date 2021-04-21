import { initState } from "./initState"

// 
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    // data el
    const vm = this // 保证vm是当前实例
    vm.$options = options //  后面会对options拓展

    // 对数据进行初始化   watch data props

    initState(vm) //vm.$options data
  }
}