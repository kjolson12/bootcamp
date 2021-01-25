// to import the functions you call require and the source

// const math = require('./index');

// console.log(math.add(5, 7));

// console.log(math.multiply(9, 0));

// console.log(math.square(9));

// console.log(math.divide(144, 12));

// you can also destructure the methods off the module.exports object

const { add, multiply, square, divide } = require('./index.js');

console.log(add(5, 7));

console.log(multiply(9, 0));

console.log(square(9));

console.log(divide(144, 12));