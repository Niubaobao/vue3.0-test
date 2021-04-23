import { isObject } from "../utils";
import { arrayMethods } from "./array";


class Observer {
  constructor(data) {// 对对象中的所有属性进行劫持 递归循环
    Object.defineProperty(data, '__ob__', {
      value: this,
      enumerable: false
    })

    if (Array.isArray(data)) {
      // 数组劫持的逻辑
      data.__proto__ = arrayMethods
      this.observerArray(data)

    } else {
      this.walk(data)
    }

  }

  observerArray(data) {
    data.forEach(item => {
      observer(item)
    })
  }

  walk(data) {
    Object.keys(data).forEach(key => {
      defineReactive(data, key, data[key])
    })
  }
}

//  vue2会对对象递归循环遍历 将每个属性用defineProperty 重新定义  性能差
function defineReactive(data, key, value) {
  observer(value)
  Object.defineProperty(data, key, {
    get() {
      return value
    },
    set(newVal) {
      // 数据劫持  修改视图
      observer(newVal)
      value = newVal
    }
  })
}

export function observer(data) {
  //如果是对象才观测
  if (!isObject(data)) return

  // 已经被观测的数组不用再次被观测s
  if (data.__ob__) {
    return
  }

  return new Observer(data)
}