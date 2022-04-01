let arr = ['aa', 'ab', 'ac']
let obj = {
  oa: 123,
  ob: 456,
  oc: 789
}
// for-in i 为键，一般用来遍历对象 一般用for循环来遍历数组
// for-of i 为值   
// for (i in obj) {
//   // if (i == 'oa') {
//   //   break
//   // }
//   console.log(i)
// }
// for (i in arr){
//   if (i === 1) {
//     break;
//   }
//   console.log(i)
// }


// for (i of arr) {
//   if (i=='ab') {
//     break;
//   }
//   console.log(i)
// }

/// for for-in for-of 都可以break

// arr.forEach(item => {
//   if (item == 'ab') {
//     return false
//   }
//   console.log(item)
// })

var randoms = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return { value: Math.random() }
      }
    }
  }
}

var randoms_pool = []
for (var n of randoms) {
  randoms_pool.push(n)
  if (randoms_pool.length === 3) {
    break
  }
}

console.log(randoms_pool)