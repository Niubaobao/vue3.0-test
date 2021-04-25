import { createElement } from "."

export function patch(oldVnode, vnode) {
  if (oldVnode.nodeType == 1) {
    // 真实元素  用vnode生成真实的 替换原来的元素
    const parentEle = oldVnode.parentNode

    let elm = createElm(vnode)
    parentEle.insertBefore(elm, oldVnode.nextSibling)


    parentEle.removeChild(oldVnode) //删除节点
  }
}

function createElm(vnode) {
  let { tag, data, children, text, vm } = vnode
  if (typeof tag == 'string') {
    vnode.el = document.createElement(tag)//创建元素  虚拟节点会有一个el属性对应一个真实节点
    children.forEach(item => {
      vnode.el.appendChild(createElm(item))
    })
  } else {
    vnode.el = document.createTextNode(text)
  }
  return vnode.el
}