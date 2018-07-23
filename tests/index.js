const Fib = require('../')

// execute
let fib = new Fib.Iterator(0, 1, 4000000, Fib.Filters.Evens)

for(let value of fib.toIter()) {
  console.log(value)
}

let sum = fib.toArray().reduce((memo, val) => {
  return memo + val || 0
}, 0)

console.log(`----\ntotal: ${sum}`)

