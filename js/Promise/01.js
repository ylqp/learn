// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done')
//   })
// }

// timeout(1000).then((value) => {
//   console.log(value)
// })

// Promise 新建后就会立即执行。start-------------------------------

let promise = new Promise(function(resolve, reject) {
  console.log('Promise')
  resolve()
})

promise.then(function() { //===>微任务
  console.log('resolved')
})

console.log('hi')
// Promise 新建后就会立即执行。end-------------------------------