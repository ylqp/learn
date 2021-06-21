<<<<<<< HEAD

// let msgList = [{content: "1"}, {content: "2"}]

// function dealSameMessage (options) {
//     return msgList.some((item) => {
//       return item.content == options.content
//     })
// }

// console.log(dealSameMessage({content: 3}))
// console.log(msgList)

function unique (arr) {
    var x = new Set(arr)
    return [...x]
}

// let arr = [1, 4, 3, 4, 5]
// console.log(arr.sort())
// console.log(new Set(arr))
// console.log(Array.from(new Set(arr)))

let arr = []
arr.push(2,3,4,5)
console.log(arr)
arr.shift(12)
console.log(arr)
let arr2 = arr.concat([1,2])
console.log(arr)
console.log(arr2)
arr.splice(0,7,8)
console.log(arr)
arr.push([2,3])
console.log(arr)
