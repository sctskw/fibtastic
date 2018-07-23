const Fib = require('../lib')

let sum = Fib.Iterator(1, 2, 4000000, Fib.Filters.Odds).sum()

console.log(sum)
