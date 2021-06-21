function Person () {
    this.name = 'aaa'
}

var person1 = new Person()

Person.prototype = {
    construntor: Person,
    sayName: function () {
        console.log(this.name)
    }
}

var person2 = new Person()
// person1.sayName()
// console.log(person1.name)
console.log(person1.constructor === person2.construntor)