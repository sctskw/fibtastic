const Fib = require('./factory')

/**
  @class Iterator

  Creates a wrapper functionality around the Fibonacci sequence
  for easy data grabbing/manipulation in a performant manner.

  @param {number} fn1  - the starting value of the sequence
  @param {number} fn2  - the next value in the sequence after fn1
  @param {number} max [optional] - the maximum a value can equal. default 100
  @param {function} expr [optional] - the expression to filter the value with

  @function toIter()
  return a generator function to traverse the values of the sequence

  @function toArray()
  return an Array of all the values in the sequence

  @usage:

  // returns all values in the sequence less than or equal 100 as
  // an Array
  let values = new Iterator(0, 1, 100).toArray()

  //outputs
  [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]

  // returns all Even values in the sequence less than or equal 100 as
  // an Array
  let values = new Iterator(0, 1, 100, (value) => {
  return value % 2 === 0
  }).toArray()

  //outputs
  [ 2, 8, 34 ]
**/

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
  function run (seq, preserveIndex = false) {
    let values = []

    // generic handler to return the value
    let handler = function (val, idx) { return val }

    // create a handler that also returns the true index
    if (preserveIndex) {
      handler = function (val, idx) { return [val, idx] }
    }

    // iterate each value and apply it using the handler
    seq((value, idx) => {
      values.push(handler(value, idx))
    })

    return values
  }

  // wrapper to bind the appropriate iterator
  function _wrap (expr) {
    return run.bind(this, getIter(expr))
  }

  return {

    // @generator
    // @return a generator to iterate over the sequence
    toIter: function * () {
      yield * _wrap(expr).apply(this, arguments)
    },

    // @return an Array representing the sequence
    toArray: function () {
      return _wrap(expr).apply(this, arguments)
    },

    // @return an Iterator class for chaining
    filter: function (expr) {
      return new Iterator(fn1, fn2, max, expr)
    },

    // @return the sum of values of the sequence
    sum: function () {
      let values = _wrap(expr).apply(this, arguments)
      return values.reduce((memo, value) => {
        return memo + value
      }, 0)
    }
  }
}
