// console.log(123)
// js是一门编译语言

// referenceError 引用异常
// TypeError 类型异常 对null 或者 undefined 进行属性引用

// function foo (str, a) {
//     eval(str)
//     console.log(a, b)
// }

// foo('var b = 3', 2)
// var o2 = {
//     b: 3
// }

// with (o2) {
//     a = 2
// }
// o2.a = 3
// console.log(o2)

// console.log(a)

// var elements = [{}, {}, {}]
// for (var i = 0; i < elements.length; i++) {

// }
// console.log(foo)
// var foo = 'nxf'
// console.log(foo1)
// let foo1 = 'aa'

// const path = '/foo/bar/baz'
// console.log(path.split('/'))
// const [, rootdir] = path.split('/')
// console.log(rootdir)

// 对象解构
// const obj = { name: 'nxf', age: 16}

// const { name:objName='jack' } = obj
// const name = 'aa'
// console.log(name)
// console.log(objName)

//模板字符串
// const aa = `11

//             22`
// console.log(aa)
// const str = console.log`hello world`

// function tag (strings) {
//     console.log(strings)
// }
// const result = tag`hey, `

// const person = {
//     name: 'nxf',
//     age: 20
// }

// const personProxy = new Proxy(person, {
//     get (target, property) {
//         // console.log(target, property)
//         // return 100

//         return property in target ? target[property] : 'default'
//     },
//     set () {

//     }
// })

// console.log(personProxy.name)
// const obj = {name: 'nxf', age: 19}
// const arr = [1, 2, 3, 4]
// for (let i in arr) {
//     console.log(i)
// }

// for (let i of arr) {
//     console.log(i)
// }
// for (let i in obj) { 
//     console.log(i)
// }
// for (let i of obj) {
//     console.log(i)
// }

// console.log(Symbol('foo') === Symbol('foo'))

// const obj = {}
// obj[Symbol('foo')] = '123'
// obj[Symbol('foo')] = '456'

// const name = Symbol()
// console.log(name)
// obj[name] = 123
// console.log(obj[name])

// console.log()
// console.log(Symbol.iterator)

// const obj = {
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//                 return {
//                     value: 'zce',
//                     done: false
//                 }
//             }
//         }
//     }
// }
// for (const i of obj) {
//     console.log(i)
// }



// for (var i = 0; i < 5; i++) {
    
//         setTimeout(function (j) {
//             console.log(new Date, j)
//         }, 1000, i)

// }

// console.log(new Date, i)

// const tasks = []
// const output = (i) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(new Date, i)
//         resolve()
//     }, 1000 * i)
// })

// for (var i = 0; i < 5; i++) {
//     tasks.push(output(i))
// }

// Promise.all(tasks).then(() => {
//     setTimeout(() => {
//         console.log(new Date, i)
//     }, 1000)
// })

// 模拟其他语言中的 sleep，实际上可以是任何异步操作
// const sleep = (timeountMS) => new Promise((resolve) => {
//     setTimeout(resolve, timeountMS);
// });

// (async () => {  // 声明即执行的 async 函数表达式
//     for (var i = 0; i < 5; i++) {
//         if (i > 0) {
//             await sleep(1000);
//         }
//         console.log(new Date, i);
//     }

//     await sleep(1000);
//     console.log(new Date, i);
// })();

// (async () => {
//     const aa = await console.log('hhhh')
//     console.log(aa)
// })().then((va) => {
//     console.log(1)
// })

