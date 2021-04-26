import { generate } from "./generate"
import { parserHTML } from "./parser"


export function compileToFunction(template) {
  //解析  第三方库html-parser2
  let root = parserHTML(template)

  //step    html => ast => render => 虚拟dom(增加额外的属性)  => 生成dom

  //生成代码

  let code = generate(root)

  let render = new Function(`with(this){return ${code}}`);// code 中可能会使用数据  数据在vm上

  return render   // width +new Function

}

// var obj = {arr:'333'}
// with(obj){console.log(arr)}   //333
// width 语法
