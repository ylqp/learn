// function foo(num) {
//   console.log("foo:" + num)
//   foo.count++
// }

// foo.count = 0

// foo(5)
// // console.log(count)
// console.log(foo.count)
// var a = 2

// function foo (fn) {

//   fn()
// }


// function bar() {
//   console.log(this.a)
// }

// foo(bar)
// (function() {
//   function foo() {
//     console.log(this.a);
//   }
//   var obj = {
//     a: 2,
//     foo: foo
//   };
//   var a = "oops, global"; // a 是全局对象的属性
  
//   setTimeout(obj.foo, 100)
// }).call({})


// function foo(a) {
//   console.log(a + b)
//   var b = a
// }
// foo(2)

// console.log(2 + undefined)

var str = '123'
typeof str