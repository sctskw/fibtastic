const Fib = require('./factory')

module.exports = function Iterator (fn1, fn2, max, expr) {
  // create the iterator
  function getIter (expr) {
    let iter = Fib.seq(fn1, fn2, max)
    return expr ? iter.filter(expr) : iter.walk()
  }

  // execute the iterator with new state
  // NOTE: this should be called every time we want to generate
  // a new iterator since once a generator function completes, it
  // cannot be continued
  function run (preserveIndex = false) {
    let values = []
    let iter = getIter(expr)

    // generic handler to return the value
    let handler = function (val, idx) { return val }

    // create a handler that also returns the true index
    if (preserveIndex) {
      handler = function (val, idx) { return [val, idx] }
    }

    // iterate each value and apply it using the handler
    iter((value, idx) => {
      values.push(handler(value, idx))
    })

    return values
  }

  return {

    // @return a generator to iterate over the sequence
    toIter: function * () {
      yield * run.apply(this, arguments)
    },

    // @return an Array representing the sequence
    toArray: function () {
      return run.apply(this, arguments)
    },

    // @return the sum of values of the sequence
    sum: function () {
      let values = run.apply(this, arguments)
      return values.reduce((memo, value) => {
        return memo + value
      }, 0)
    }
  }
}
