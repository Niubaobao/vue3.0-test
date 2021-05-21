// 接口用来描述对象形状的

interface ISchool {
  readonly name: string,
  age: number,
  address?: string //可以填可以不填
}

let school: ISchool = {
  name: 'ss',
  age: 12,
  address: 'wee'
}
// school.name = 'ddd'   不可修改


//接口的拓展  集成
interface IZhangYaChao extends ISchool {
  type: string,
  [key: string]: any   //任意类型

}

let zhangyachao: IZhangYaChao = {
  ...school,
  type: 'type',
  a: 11
}

// 类型断言  表示这就是一个这样的类型
let school2: ISchool = ({
  name: 'ss',
  age: 12,
  address: 'wee',
  lessons: ['架构可']
}) as ISchool


