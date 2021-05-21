
const install = (Vue, storeName = '$store') => {
  console.log('调用install方法')
  console.log(Vue)
  Vue.mixin({
    beforeCreate() {
      console.log('??????')
      if (this.$options.store) {
        Vue.prototype[storeName] = this.$options.store
      }
    }
  })
}


class Store {
  constructor(options) {

  }
}

export default {
  install,
  Store
}