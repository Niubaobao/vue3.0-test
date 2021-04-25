/*
  手写实现vue
*/

import { initMixin } from "./init"
import { lifecycleMixin } from "./lifecycle"
import { renderMixin } from "./render"

function Vue(options) {
  this._init(options)
}

// 拓展原型
initMixin(Vue)

renderMixin(Vue) //_render
lifecycleMixin(Vue)//_update

export default Vue