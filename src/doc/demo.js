const isValid = (s) => {
  const n = s.length;

  // s的长度必须是偶数 不然就不用对比了直接返回false
  if (n % 2 === 1) return false

  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])

  const stack = []


  for (let i = 0; i < s.length; i++) {
    if (pairs.has(s[i])) {
      if (!stack.length || stack[stack.length - 1] !== pairs.get(s[i])) {
        return false
      }
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  // foreach return这是跳出本次循环
  // s.split('').forEach(item => {
  //   if (pairs.has(item)) {
  //     if (!stack.length || stack[stack.length - 1] !== pairs.get(item)) {
  //       return false
  //     }
  //     stack.pop()
  //   } else {
  //     stack.push(item)
  //   }

  // });

  return !stack.length

}

