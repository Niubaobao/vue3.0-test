let oldArrayPrototype = Array.prototype

export let arrayMethods = Object.create(oldArrayPrototype)

let methods = [
  'push',
  'shift',
  'pop',
  'unshift',
  'reverse',
  'sort',
  'splice'
]

methods.forEach(method => {
  arrayMethods[method] = function (...args) {

    oldArrayPrototype[method].call(this, ...args.args)
    // 当push新增对象的时候需要继续观测

    let inserted
    let ob = this.__ob__ //根据当前数组获取到observer实例

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;//就是新增的参数
        break
      case 'splice':
        inserted = args.splice(2)
      default:
        break
    }

    //如果有新增的值   继续劫持  需要观测的是数组的每一项  而不是数组
    //  数组劫持   修改视图

    if (inserted) ob.observerArray(inserted)

  }
})