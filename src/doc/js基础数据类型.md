### 
* 基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量
* 引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念。

### js中判断类型方法
* typeof  typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断。
```
typeof 1 // 'number'

typeof '1' // 'string'

typeof undefined // 'undefined'

typeof true // 'boolean'

typeof Symbol() // 'symbol'

typeof null // 'object'

typeof [] // 'object'

typeof {} // 'object'

typeof console // 'object'

typeof console.log // 'function'

```
* instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型

* 第三种判断方法：Object.prototype.toString
```
Object.prototype.toString({})       // "[object Object]"

Object.prototype.toString.call({})  // 同上结果，加上call也ok

Object.prototype.toString.call(1)    // "[object Number]"

Object.prototype.toString.call('1')  // "[object String]"

Object.prototype.toString.call(true)  // "[object Boolean]"

Object.prototype.toString.call(function(){})  // "[object Function]"

Object.prototype.toString.call(null)   //"[object Null]"

Object.prototype.toString.call(undefined) //"[object Undefined]"

Object.prototype.toString.call(/123/g)    //"[object RegExp]"

Object.prototype.toString.call(new Date()) //"[object Date]"

Object.prototype.toString.call([])       //"[object Array]"

Object.prototype.toString.call(document)  //"[object HTMLDocument]"

Object.prototype.toString.call(window)   //"[object Window]"

```