import { createElement, createTextElement } from "./vdom/index"

export function renderMixin(Vue) {

  Vue.prototype._c = function (tag, data, ...children) {
    createElement(this, ...arguments)
  }
  Vue.prototype._v = function (text) {//创建文本
    createTextElement(this, text)
    console.log(text)
  }

  Vue.prototype._s = function (val) {
    if (typeof val == 'object') {
      return JSON.stringify(val)
    }
    return val

  }

  Vue.prototype._render = function () {
    const vm = this

    let render = vm.$options.render
    console.log('111')
    let vnode = render.call(vm)

    return vnode
  }
}