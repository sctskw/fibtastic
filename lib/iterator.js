const Fib = require('./factory')

module.exports = function Iterator(fn1, fn2, max, expr) {

  function run(preserveIndex = false) {
    let iter = Fib.gen(fn1, fn2, max).filter(expr)
    let values = []

    let handler = function(val, idx) { return val }

    if (preserveIndex) {
      handler = function(val, idx) { return [val, idx] }
    }

    iter((value, idx)=> {
      values.push(handler(value, idx))
    })

    return values
  }

  return {

    toIter: function* () {
      yield* run.apply(this, arguments)
    },

    toArray: function() {
      return run.apply(this, arguments)
    }
  }
}
