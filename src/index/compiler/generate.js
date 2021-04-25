const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g //{{xxxx}}

function genProps(attrs) {//[{name':'xxx',value:'xxx'}]
  let str = ''
  for (let i = 0; i < attrs.length; i++) {
    let attr = attrs[i]

    if (attr.name == 'style') {
      let styleObj = {}

      attr.value.replace(/([^;:]+)\:([^;:]+)/g, function () {
        styleObj[arguments[1]] = arguments[2]
      })

      attr.value = styleObj
    }

    str += `${attr.name}:${JSON.stringify(attr.value)},`
  }
  // 删除最后一个逗号
  return `{${str.slice(0, -1)}}`
}




function genChildren(el) {
  let children = el.children
  if (children) {
    return children.map(c => gen(c)).join(',')
  }
  return false
}


function gen(el) {
  if (el.type == 1) {
    //元素
    return generate(el)
  } else {
    // 考虑才变量 qwq{{}}wqw
    let text = el.text
    // return `_v('${text}')`
    if (!defaultTagRE.test(text)) {
      return `_v('${text}')`
    } else {
      let token = []
      let match
      let lastIndex = defaultTagRE.lastIndex = 0 //正则问题  需要将正则lastIndex 重置0
      while (match = defaultTagRE.exec(text)) {
        let index = match.index //开始索引

        if (index > lastIndex) {
          token.push(JSON.stringify(text.slice(lastIndex, index)))
        }

        token.push(`_s(${match[1].trim()})`)
        lastIndex = index + match[0].length
      }
      if (lastIndex < text.length) {
        token.push(JSON.stringify(text.slice(lastIndex)))
      }
      return `_v(${token.join('+')})`

    }
  }
}

export function generate(el) {
  //  _c('div',{id:'app'},'hello')

  let children = genChildren(el)
  // 遍历树 将树拼接成字符串
  let code = `_c('${el.tag}',${el.attrs.length ? genProps(el.attrs) : 'undefined'})${children ? `,${children}` : ''}`

  return code

}

