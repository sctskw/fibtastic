const fibonacci = require('./fibonacci')

// wrapper function to control the Fibonacci Iterator
// and apply a handler to each value
function walk (fn1, fn2, max) {
  // initialize the sequence
  let fib = fibonacci(fn1, fn2, max)

  // return a wrapper function for flow control
  return (handler) => {
    let idx = 0 // index pointer

    for (let value of fib) {
      // end of sequence
      if (!value) break

      // index could be useful for processing later
      handler.call(this, value, idx)

      // increment the index
      idx++
    }
  }
}

function gen (fn1, fn2, max) {
  function fibber (expr, handler) {
    walk(fn1, fn2, max)((value, idx) => {
      if (!expr || expr.call(this, value, idx)) {
        handler.call(this, value, idx)
      }
    })
  }

  return {
    filter: (expr) => {
      return fibber.bind(this, expr)
    },
    exec: () => {
      return fibber.bind(this, null)
    }
  }
}

module.exports = {walk, gen}
