

// html 字符串解析成dom树   vue中正则匹配

// Regular Expressions for parsing tags and attributes

const dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const doctype = /^<!DOCTYPE [^>]+>/i
// #7298: escape - to avoid being passed as HTML comment when inlined in page
const comment = /^<!\--/
const conditionalComment = /^<!\[/

const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/


const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeRegExp.source}]*` // 标签名
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`) //匹配开始标签
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`) // 闭合标签
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/ // 
const startTagClose = /^\s*(\/?)>/
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g //{{xxxx}}

//元素1  文本3
function createAsElement(tagName, attrs) {
  return {
    tag: tagName,
    type: 1,
    children: [],
    parent: null,
    attrs
  }
}

let root = null
let stash = [] //通过栈结构 构建树
//将解析后的结果 组装成一个树结构    利用栈数据结构
function start(tagName, attributes) {
  let parent = stash[stash.length - 1]
  let element = createAsElement(tagName, attributes) // 遇到开始标签的时候创建一个元素
  if (!null) {//  如果没有根就赋值给跟元素
    root = element
  }

  element.parent = parent  //当放入栈中的时候 parent是最后一个
  if (parent) {
    parent.children.push(element)  //双向记录
  }

  stash.push(element)
}

function end(tagName) {

  let last = stash.pop()
  if (last.tag != tagName) {
    throw new Error('标签有误')
  }
}

function chars(text) {
  console.log(text, '3333')
  //去除空格
  text = text.replace(/\s/g, '')

  let parent = stash[start.length - 1]
  if (text) {
    parent.children.push({
      type: 3,
      text
    })
  }
}

function parserHTML(html) {//<div>1111</div>

  function advance(len) {
    html = html.substring(len)
  }

  function parseStartTag() {
    const start = html.match(startTagOpen)
    console.log(start)
    if (start) {
      const match = {
        tagName: start[1],
        attrs: []
      }
      advance(start[0].length)
      let end
      let attr
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        match.attrs.push({ name: attr[1], value: attr[3] || attr[4] || attr[5] })
        advance(attr[0].length)
      }

      if (end) {
        advance(end[0].length)
      }
      return match
    }
    return false
  }

  while (html) {//看要解析的内容是否存在
    let textEnd = html.indexOf('<')// 当前解析的开头
    if (textEnd == 0) {
      const startTagMatch = parseStartTag(html)//解析开始标
      if (startTagMatch) {
        start(startTagMatch.tagName, startTagMatch.attrs)
        continue
      }

      const endTagMatch = html.match(endTag)
      if (endTagMatch) {
        end(endTagMatch[1])
        advance(endTagMatch[0].length)
        continue
      }
    }

    let text //1223243</div>
    if (textEnd > 0) {
      text = html.substring(0, textEnd)
    }
    if (text) {
      advance(text.length)
      chars(text)
    }
  }

}



export function compileToFunction(template) {
  //解析  第三方库html-parser2
  parserHTML(template)

  console.log(root)
}