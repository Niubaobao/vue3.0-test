import { isObject } from "../utils";


class Observer {
  constructor(data) {// 对对象中的所有属性进行劫持 递归循环
    this.walk(data)
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
      observer(newVal)
      value = newVal
    }
  })
}

export function observer(data) {
  //如果是对象才观测
  if (!isObject(data)) return

  return new Observer(data)
}