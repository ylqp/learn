const set = new Set([1, 3, 4, 4, 6, 7])
set.add(8)
set.delete(7)
console.log(set.has(1))
console.log([...set])

// const ws = new WeakSet([[]])
// console.log(ws)

// set.add(8)