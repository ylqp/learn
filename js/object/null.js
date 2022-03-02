// let obj = {

// }
// console.log('obj----------------------start')
// console.log(Object.getPrototypeOf(obj))
// console.log(obj.__proto__)

// console.log(obj.prototype)
// console.log('obj----------------------end')

// let f = function () {
//   this.a = 1
//   this.b = 2
// }

// console.log('fnc----------------------start')
// console.log(Object.getPrototypeOf(f))
// console.log(f.__proto__)

// console.log(f.prototype)
// console.log('fnch----------------------end')

// function Person() {

// }

// Person.prototype = {
//   name: 123
// }

// var friend = new Person()

// Person.prototype = {}

// console.log(friend)
// console.log(friend.constructor == Person.prototype.constructor)
// console.log(friend.constructor == Person)
// console.log(friend.constructor == Object)
// console.log(friend.__proto__)
// console.log(Person.__proto__)
// console.log({}.__proto__)
// console.log(Function.__proto__.__proto__)
// console.log(Function.prototype)
// console.log(Object.prototype)
// console.log(Function.prototype == Function.__proto__)
// console.log(Object.prototype.__proto__)
// console.log(Function.__proto__ == Object.__proto__)
// console.log(Object.prototype == Function.prototype.__proto__)

// console.log(Person.__proto__ == Function.prototype)
// console.log(Person.prototype.__proto__ == Object.prototype)
// console.log(Function.prototype)
// console.log({} == {})
// console.log(Function.prototype.__proto__.constructor === Object)
// console.log(Function.prototype.__proto__ === Object.prototype)

// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
console.log(rect)
rect.move(1, 1); // Outputs, 'Shape moved.'
console.log(rect)

