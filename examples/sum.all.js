const Fib = require('../lib')

let sum = Fib.Iterator(0, 1, 4000000).sum()

console.log(sum)
