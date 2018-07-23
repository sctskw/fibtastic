let fibonacci = require('lib/fibonacci')

test('fibonacci() should return a generator', () => {
  let fib = fibonacci(0, 1, 10)

  expect(fib.toString()).toContain('Generator')
})

test('fibonacci() should generate a sequence', () => {
  let fib = fibonacci(0, 1, 10)

  expect(fib.next().value).toEqual(1)
  expect(fib.next().value).toEqual(1)
  expect(fib.next().value).toEqual(2)
  expect(fib.next().value).toEqual(3)
  expect(fib.next().value).toEqual(5)
  expect(fib.next().value).toEqual(8)
  expect(fib.next().value).toEqual(false)
  expect(fib.next().done).toBeTruthy()
})

test('fibonacci() should generate an interable sequence', () => {
  let fib = fibonacci(0, 1, 10)

  let assumptions = [1, 1, 2, 3, 5, 8]

  expect.assertions(6)

  let idx = 0
  for (let value of fib) {
    if (!value) break
    expect(assumptions[idx]).toEqual(value)
    idx++
  }
})
