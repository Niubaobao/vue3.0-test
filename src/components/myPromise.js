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

  callBack(_this.resolve, _this.reject) //执行callback并传入相应的值
}

// 添加then方法
MyPromise.prototype.then = function () {}

/*
promise连续执行两个或者多个异步操作，在这种情况下每一个后来的操作都是在前面的操作结果执行成功之后带着上一步的返回结果开始执行的
*/
