// 函数主要关心返回值 和参数

function sum1(a: string, b: string): string {
  return a + b
}

sum1('a', 'b')

// 可以通过表达式来定义

// 声明一个类型、
type sum = ((a: number, b: number) => number) | string
// interface Sum {
//   (a: number, b: number): number
// }

//type 仅仅是别名 一般在定义联合类型或者临时变量的时候可以使用~

// 区别  interface  可以继承 可以被类来实现
let sum2: sum = (a: number, b: number): number => a + b
sum2 = 'eee'


