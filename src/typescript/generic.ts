// 泛型  用来在代码执行时传入的类型 确定结果


function creatArray<T>(len: number, value: T): T[] {

  let result = []
  for (let i = 0; i < len; i++) {
    result.push(value)
  }

  return result
}

let arr = creatArray(3, 'zf')


//  多个泛型  元祖交换  [string,number]   = [number,string]

const swap = <T, K>(tuple: [T, K]): [K, T] => {
  return [tuple[1], tuple[0]]
}


swap<number, string>([1, '12'])

export { }
