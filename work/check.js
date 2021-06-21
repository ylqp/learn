
function doSomething() {
    console.log('Hello World!');
  }
  // 使用Object.prototype.toString.call来判断
  console.log(Object.prototype.toString.call(1)); // [object Number]
  console.log(Object.prototype.toString.call('Hello')); // [object String]
  console.log(Object.prototype.toString.call(false)); // [object Boolean]
  console.log(Object.prototype.toString.call({})); // [object Object]
  console.log(Object.prototype.toString.call([1, 2, 3])); // [object Array]
  console.log(Object.prototype.toString.call(new Error('error!'))); // [object Error]
  console.log(Object.prototype.toString.call(new Date())); // [object Date]
  console.log(Object.prototype.toString.call(new RegExp())); // [object RegExp]
  console.log(Object.prototype.toString.call(doSomething)); // [object Function]
  console.log(Object.prototype.toString.call(null)); // [object Null]
  console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
  console.log(Object.prototype.toString.call(JSON.stringify({
    name: 'zhencanhau'
  }))); // [object String]
  console.log(Object.prototype.toString.call(Math)); // [object Math]
  console.log(Object.prototype.toString.call(Symbol('abc'))); // [object Symbol]
  console.log(Object.prototype.toString.call(new Set())); // [object Set]
  console.log(Object.prototype.toString.call(new Map())); // [object Map]