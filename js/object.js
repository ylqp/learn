// var obj = {
//     aa: '12345'
// }

// console.log(obj.aa)
// console.log(obj['aa'])

function createPerson (name, age, job) {
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    // o.sayName = function () {
    //     console.log(this.name)
    // }
    o.sayName = sayName
    return o
}
var person1 = createPerson('nxf', 29, 'dddd')
// console.log(person1)

function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    // this.sayName = function () {
    //     console.log(this.name)
    // }
    this.sayName = sayName
}
function sayName () {
    console.log(this.name)
}
var person2 = new Person('ylqp', 16, 'dddddddddd')
// person1.sayName()
// person1.sayName.call(person2)
// person2.sayName.call(person1)
// console.log(person2.constructor === Person)
// console.log(person1 instanceof Person)
// console.log(person1 instanceof Object)
// Person('aaa')
// console.log(globalThis.name)
// globalThis.sayName()
// console.log(person1.sayName === person2.sayName)
// console.log(person1.sayName === person2.sayName)
// sayName()

// console.log(createPerson.prototype)
// console.log(createPerson.prototype.constructor)
// console.log(person2.constructor)
// console.log(Person.prototype.isPrototypeOf(person1))
// console.log(Object.getPrototypeOf(person2) === Person.prototype)
person2.aa = 'jjj'
// console.log('aa' in person2)
// console.log('name' in person2)
// console.log(Object.keys(person2))
// console.log(Object.getOwnPropertyNames(person2))
// console.log(Object.getOwnPropertyNames(Person.prototype))
// console.log(typeof [1,2])

