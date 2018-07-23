const Fib = require('../lib')

let sum = Fib.Iterator(1, 2, 4000000, Fib.Filters.Evens).sum()

console.log(sum)
