function MyPromise(callBack) {
  var _this = this
  _this.value = void 0
  var onResolvedCallbacks //promise resolve回掉函数
  var onRejectedCallback //promise reject回调函数

  //resolve处理函数
  _this.resolve = function (value) {
    onResolvedCallbacks()
  }

  //reject处理函数
  _this.reject = function () {
    onRejectedCallback()
  }

  callBack(_this.resolve, _this.reject) //执行callback并传入相应的值
}

// 添加then方法
MyPromise.prototype.then = function () {}
