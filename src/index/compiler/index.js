import { generate } from "./generate"
import { parserHTML } from "./parser"


export function compileToFunction(template) {
  //解析  第三方库html-parser2
  let root = parserHTML(template)
  //step    html => ast => render => 虚拟dom(增加额外的属性)  => 生成dom

  //生成代码
  console.log(root),
    console.log('????')
  let code = generate(root)
  console.log(code)
}