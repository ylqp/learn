let obj = {
    data: {name: 'nxf', age: 16},
    error: '',
    status: 1
}

// let json = JSON.stringify(obj)
// console.log(json)
// console.log(JSON.parse(json))

let test = Object.getOwnPropertyDescriptor(obj, 'data')
// console.log(test)
obj.prototype = 3
let obj2 = Object.create(obj)
// Object.getPrototypeOf(obj2)
// obj2.constructor.prototype
// obj.isPrototypeOf(obj2)
// Object.prototype.toString.call(global).slice(8, -1)
// console.log(Array.toString())

const aa = () => {
    for (let i = 0; i<10; i++ ) {
        // window.WEBOTS.$otsMessage({content:'1111111111'})
        setTimeout(function(){
            window.WEBOTS.$otsMessage({content:'1111111111'})
        }, 1000)
    }
}
aa()

