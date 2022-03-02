// let book = {
//   year_: 2017,
//   edition: 1
// }

// Object.defineProperty(book, 'year', {
//   // configurable: true,
//   // enumerable: true,
//   get() {
//     return this.year_
//   },
//   set(newValue) {
//     if (newValue > 2017) {
//       this.year_ = newValue
//       this.edition += newValue - 2017
//     }
//   }
// })

// console.log(book)
// book.year = 2019
// console.log(book)
// for(let i in book) {
//   console.log(i)
// }

// let book = {}
// Object.defineProperties(book, {
//   year_: {
//     enumerable: true,
//     value: 2017
//   },
//   edition: {
//     value: 1
//   },
//   year: {
//     get() {
//       return this.year_
//     },
//     set(newValue) {
//       if (newValue > 2017) {
//         this.year_ = newValue
//         this.edition += newValue -2017
//       }
//     }
//   }
// })

// const aa = book.hasOwnProperty('year')
// console.log(aa)

dest = { 
  set a(val) { 
    console.log(`Invoked dest setter with param ${val}`); 
  } 
 }; 
 src = { 
  get a() { 
    console.log('Invoked src getter'); 
    return 'foo'; 
  } 
 };
 console.log(dest)
 Object.assign(dest, src);
 console.log(dest)
 console.log(dest.a)
