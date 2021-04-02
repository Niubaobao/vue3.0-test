
<!-- 
// 栈 stack

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 -->

 <!-- 
 Map 
 js对象是object 本质上是键值对的集合（hash结构）但是传统上只能用字符串当做键

 es6提供了Map结构 它类似与对象 也是键值对的集合 但是键的范围不限于字符串，各种类型的值（包括对象）都可以当作键 map提供值对值的对应
 是一种更完善的hash结构实现

 Map.set(key, value)
 Map.get(key)
 Map.has(key)
 Map.delete(key)
 Map.has(key)

 Map也可以接受一个数组作为参数，该数组的成员是一个个键值对的数组

  -->


  <!-- var s = "{[]}" -->

```
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

  return !stack.length
}

```

<!-- 
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/backspace-string-compare
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 -->

 <!-- 
    进栈出栈 遇到#出栈  不是#出栈 最后对比两个字符串
  -->

 ```
 const strCompare = (s, t) => {
  const str = (s, a = []) => {
    const len = s.length;
    for (let i = 0; i < len; i++) {
      if (s[i] === '#') {
        a.pop()
      } else {
        a.push(s[i])
      }
    }
    return a.join('')
  }
  return str(s) === str(t)
}

 
 ```
