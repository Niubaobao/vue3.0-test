import { popTarget, pushTarget } from "./dep"

let id = 0
class Watcher {

  constructor(vm, exprOrFn, cb, options) {
    this.vm = vm
    this.exprOrFn = exprOrFn
    this.cb = cb
    this.options = options
    this.id = id++
    this.deps = []
    this.depsId = new Set()

    // 默认exprOrFn执行一次   exprOrFn 做了什么事情 ？ render（去vm上面取值）

    this.getter = exprOrFn
    this.get()
  }

  get() { //用户更新时  可以重新调用getter

    //每个属性都可以收集自己的watcher
    // 每个属性可以对应对个watcher
    pushTarget(this)
    this.getter()
    popTarget()
  }

  update() {
    this.get()
  }

  addDep(dep) {
    let id = dep.id
    if (!this.depsId.has(id)) {
      this.depsId.add(id)
      this.deps.push(dep)
      dep.addSub(this)
    }

  }
}

export default Watcher