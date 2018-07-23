const Fib = require('../lib')

let values = new Fib.Iterator(0, 1, 100, (value) => {
  return value % 2 === 0
}).toArray()

console.log(values)
