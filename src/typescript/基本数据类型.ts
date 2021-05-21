// typescript ts-node
//code runner

// ts中 冒号后面的都是类型
const str: string = 'hello'

//联合类型
let age: string | number = 1

//数组声明 对象 函数
const arr: number[] = [1, 2, 3]

//元祖
const tuple: [string, number] = ['22', 11]
console.log(tuple)
let n: null = null

//枚举
enum USER_RULE {
  USER = 'DDE',
  ADMIN = 'ADMIN'
}

// any 不进行校验 无法推到类型
const array: any = []


// object 非原始类型

const create = (obj: object) => {

}


// 对象类型

export { }




