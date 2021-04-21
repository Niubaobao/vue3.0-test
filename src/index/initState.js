import { observer } from "./observer/index"
import { isFunction } from "./utils"

export function initState(vm) {

  const opts = vm.$options


  // if (data.props) {
  //   initProps()
  // }

  // 如果有data数据
  if (opts.data) {
    initData(vm)
  }

  // if (opts.watch) {

  // }
}


function initData(vm) {
  let data = vm.$options.data
  // vue2 会将data中的所有数据 进行数据劫持 object.defineProperty 

  // data 是对象直接用  是函数使用返回值
  //将data与vm关联起来
  data = vm._data = isFunction(data) ? data.call(vm) : data
  // 劫持数据 观测数据
  observer(data)

  console.log(vm)
}