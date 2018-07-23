const Fib = require('../lib')

let values = new Fib.Iterator(0, 1, 100).toArray()

console.log(values)
