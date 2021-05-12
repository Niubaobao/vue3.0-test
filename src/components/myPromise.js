// 三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function MyPromise(callBack) {
  var _this = this
  _this.currentState = PENDING

  _this.value = void 0
  var onResolvedCallbacks = [] //promise resolve回掉函数
  var onRejectedCallback = [] //promise reject回调函数

  //resolve处理函数
  _this.resolve = function (value) {
    if (value instanceof MyPromise) {
      // 如果value是promis 递归执行
      return value.then(_this.resolve, _this.reject)
    }

    setTimeout(() => {
      if (_this.currentState === PENDING) {
        _this.currentState = REJECTED //状态管理
        _this.value = value
        _this.onResolvedCallbacks.forEach((cb) => cb())
      }
    }, 0)
  }

  //reject处理函数
  _this.reject = function (value) {
    setTimeout(() => {
      if (_this.currentState === PENDING) {
        _this.currentState = REJECTED
        _this.value = value
        _this.onRejectedCallback.forEach((cb) => cb())
      }
    }, 0)
  }

  try {
    callBack(_this.resolve, _this.reject) //执行callback并传入相应的值
  } catch (error) {
    _this.reject(error)
  }
}

// 添加then方法 接受两个参数，成功的回调，失败的回调
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  var _this = this
  //规范2.27规定 then必须返回一个新的promise
  var promise2

  onFulfilled =
    typeof onFulfilled === 'function' ? onFulfilled : (value) => value
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (error) => {
          throw error
        }

  if (_this.currentState === REJECTED) {
    return (promise2 = new MyPromise(function (resolve, reject) {}))
  }

  if (_this.currentState === PENDING) {
    return (promise2 = new MyPromise(function (resolve, reject) {
      _this.onResolvedCallbacks.push(function () {})
    }))
  }

  if (_this.currentState === FULFILLED) {
    return (promise2 = new MyPromise(function (resolve, reject) {}))
  }
}

MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

MyPromise.prototype.finally = function (callBack) {
  return this.then(
    function () {
      return MyPromise.resolve(callBack()).then(function () {
        return value
      })
    },
    function (err) {
      return MyPromise.resolve(callBack()).then(function () {
        throw err
      })
    },
  )
}

/*
promise连续执行两个或者多个异步操作，在这种情况下每一个后来的操作都是在前面的操作结果执行成功之后带着上一步的返回结果开始执行的
*/

class Promise {
  constructor() {
    this.name = 'hahaha'
    console.log(this)
  }
}
