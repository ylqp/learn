// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result, 1))
//   .catch(error => console.log(error, 2))

// new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2);
// }).then(r => {
//   console.log(r);
// });

// const promise = new Promise(function(resolve, reject) {
//   throw new Error('test');
// });
// promise.catch(function(error) {
//   console.log(error);
// });

// const promise = new Promise(function(resolve, reject) {
//   reject(new Error('test'));
// });
// promise.catch(function(error) {
//   console.log(error);
// });

// const promise = new Promise(function(resolve, reject) {
//   resolve('ok');
//   throw new Error('test');
// });
// promise
//   .then(function(value) { console.log(value) })
//   .catch(function(error) { console.log(error) });

// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   console.log('everything is great');
// });
// setTimeout(() => { console.log(123) }, 2000);

// const promise = new Promise(function (resolve, reject) {
//   resolve('ok');
//   setTimeout(function () { throw new Error('test') }, 0)
// });
// promise
//   .then(function (value) { console.log(value) })
//   .catch((err) => {
//     console.log(err)
//   })

// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing()
// .catch(function(error) {
//   console.log('oh no', error)
// })
// .then(function() {
//   console.log('carry on');
// })
// let thenable = {
//   then: function(resolve, reject) {
//     resolve(42);
//   }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function (value) {
//   console.log(value);  // 42
// });

// let p2 = new Promise(resolve => resolve(thenable))

// p2.then(value => {
//   console.log(value)
// })

// const p = Promise.reject('出错了');
// const p = new Promise((resolve, reject) => reject('出错了'))
// p.then(null, function (s) {
//   console.log(s)
// });


// Promise.prototype.finally = function (callback) {
//   let P = this.constructor;
//   return this.then(
//     value  => P.resolve(callback()).then(() => value),
//     reason => P.resolve(callback()).then(() => { throw reason })
//   );
// };

// function A () {
//   let a = this.constructor
  
// }
// A()
// console.log(new A() instanceof A() === true)



// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result)
// .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// })
// .then(result => result)
// // .catch(e => e);

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));

const f = () => console.log('now');
Promise.try(f);
console.log('next');