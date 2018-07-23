const Fib = require('../lib')

let sum = Fib.Iterator(0, 1, 4000000, (value, idx) => {
  return idx % 2 > 0
}).sum()

console.log(sum)
