// Promise.resolve()
//   .then(function () {
//     console.log('start');
//     return Promise.resolve('step 1');
//   })
//   .then(function (r) {
//     console.log(r);
//     Promise.resolve('step 2');
//   })
//   .then(function (r) {
//     console.log(r);
//     return Promise.resolve('step 3');
//   }).then(function (r) {
//       console.log(r)
//   })

// Promise.resolve()
//   .then(function () {
//     console.log(1);
//   })
//   .then(function (r) {
//     console.log(r)
//     console.log(2);
//     console.log(4)
//   })
//   .then(function (r) {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(5);
//   });

// new Promise((resolve) => {
//   console.log('外层宏事件2');
//   resolve()
// }).then(() => {
//   console.log('微事件1');
// }).then(()=>{
//   console.log('微事件2')
// })
// setTimeout(() => {
//   //执行后 回调一个宏事件
//   console.log('内层宏事件3')
// }, 0)
// console.log('外层宏事件1');


// setTimeout(() => {
//   //执行后 回调一个宏事件
//   console.log('内层宏事件3')
// }, 0)
// console.log('外层宏事件1');

// new Promise((resolve) => {
//   console.log('外层宏事件2');
//   resolve()
// }).then(() => {
//   console.log('微事件1');
// }).then(()=>{
//   console.log('微事件2')
// })
// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
// })

// console.log(2)
// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
//   Promise.resolve().then(_ => {
//     console.log('before timeout')
//   }).then(_ => {
//     Promise.resolve().then(_ => {
//       console.log('also before timeout')
//     })
//   })
// })

// console.log(2)

// setTimeout(_ => console.log(4))

// async function main() {
//   console.log(1)
//   await Promise.resolve()
//   console.log(3)
// }

// main()

// console.log(2)
// var p = Promise.resolve()
// var dd;
// var ss = new Promise(resolve=>dd=resolve)
//           .then(
//             ()=>console.log('llll')
//           ).then(
//             ()=>console.log('ssss')
//           );
// p.then(function(){
//     dd(1)
//     console.log('a')
// }).then(function(){
//     console.log('b')
// })

// Promise.resolve().then(() => {
//   console.log(0);
//   return Promise.resolve(4);
// }).then((res) => {
//   console.log(res)
// })

// Promise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(5);
// }).then(() =>{
//   console.log(6);
// })
