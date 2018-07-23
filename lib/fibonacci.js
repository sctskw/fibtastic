/**
 @generator
 Fibonacci Generator

 yields each result in the Fibonacci Sequence using starting
 values

 @param fn1: starting value in the sequence: n >= 0
 @param fn2: next value in the sequence: k >= 0 && k >= n+1
 @param max [default=100]: the maximum value the sequence should reach

 @usage:

  for(let value of fibonacci(0, 1)) {
    console.log(value)
  }
**/

module.exports = function * fibonacci (fn1, fn2, max = 100) {
  let head = parseInt(fn2) // ensure int
  let last = parseInt(fn1) // ensure int
  let temp

  while (head <= max) {
    yield head

    temp = parseInt(last)
    last = head
    head = head + temp
  }

  // sequence concluded
  yield false
}
