const Fib = require('../lib')

const iter = new Fib.Iterator(0, 1, 100).toIter()

for (let value of iter) {
  console.log(value)
}
