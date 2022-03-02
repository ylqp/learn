// var obj = {
//   aa: {child: 1234}
// }

// let { aa } = obj
// // aa = 2345

// // let aa = obj.aa 
// aa.child = 'www'

// console.log(obj)
// console.log(aa)
// const Person = {}
// function A () {
//   return Object
// }
// console.log(new A() instanceof A() === true)

// function Person() {
//   // return Person
//   return 123
// }
// console.log((new Person()) instanceof Person)
// Person.prototype = Object.prototype
// console.log(new Person() instanceof Person())  // 为啥是false

// console.log(Person.prototype)
// console.log(Person().prototype)
// console.log(Person().prototype.constructor === Person.prototype.constructor)

// console.log(new Person().prototype === Person.prototype)
// console.log(String.prototype === Date.prototype)
// console.log(Object instanceof Object)
// const aa = new Person()
// console.log(a)
// console.log((new Person()) instanceof Person)

// console.log({} instanceof Function)

// function Person() {
//   return Person
//   // return 123
// }
// function instance_of (L, R) {
//   var O = R.prototype
//   console.log('O------------------',O)
//   L = L.__proto__
//   console.log(L)
//   while (true) {
//     if (L === null) {
//       return false
//     }
//     if (O === L) {
//       return true
//     }
//     L = L.__proto__
//     console.log(L)
//   }
// }

// console.log(instance_of(new Person(), Person))
// function P () {
//   // return P
// }
// console.log(P.prototype.constructor)
// console.log(new P())

// function fun(...d) {
//   const [a, ...b] = d;
//   return d.length ? Array(a).fill(0).map(_ => fun(...b)) : Array(a);
// }
// console.log(fun(2,3,4))

// console.log(Array(2))
let data = {
  left: {
    left: {
      val: 1,
    },
    right: {
      left: { val: 3 },
      right: { val: 5 },
      val: 9,
    },
    val: 6,
  },
  right: {
    val: 7,
  },
  val: 4
}

function getVal (data,result = []) {
  if (!data.left && !data.right) {
    result.push(data.val)
  }
  if (data.left) {
    getVal(data.left,result)
  }
  if (data.right) {
    getVal(data.right,result)
  }
  return result
}


function isEqually(result) {
  let falg = true
  if (result.length < 2) {
    return false
  }
  let value = null
  for (let i = 0; i < result.length; i++) {
    if (!value) {
      value = result[i + 1] - result[i]
    } else {
      if (i !== result.length -1) {
        if (result[i + 1] - result[i] !== value) {
          falg = false
        }
      }
    }
  }
  return falg
}
console.log(isEqually(getVal(data)))
