const Fib = require('lib')

test('Factory should have function walk()', () => {
  expect(Fib.Factory).toBeDefined()
  expect(Fib.Factory.walk).toBeInstanceOf(Function)
})

test('Factory.walk() should return a function', () => {
  let seq = Fib.Factory.walk(0, 1, 10)
  expect(seq).toBeInstanceOf(Function)
})

test('Factory.walk() should walk the fibonacci sequence', () => {
  let seq = Fib.Factory.walk(0, 1, 10)

  expect(seq).toBeInstanceOf(Function)

  let mockHandler = jest.fn()

  seq(mockHandler)

  expect(mockHandler).toHaveBeenCalled()
  expect(mockHandler).toHaveBeenCalledTimes(6)
  expect(mockHandler).toHaveBeenLastCalledWith(8, 5)
})

test('Factory should have function seq()', () => {
  expect(Fib.Factory).toBeDefined()
  expect(Fib.Factory.seq).toBeInstanceOf(Function)
})

test('Factory.seq() should return interface', () => {
  let seq = Fib.Factory.seq(0, 1, 10)

  expect(seq).toBeInstanceOf(Object)
  expect(seq.filter).toBeInstanceOf(Function)
  expect(seq.walk).toBeInstanceOf(Function)
})

test('Factory.seq().filter() should filter sequence by expression', () => {
  let expression = function (value) {
    return [1, 5].includes(value)
  }

  let seq = Fib.Factory.seq(0, 1, 10).filter(expression)

  // assuming the values are: 0,1,1,2,5,8
  // we'll have 3 values that hold true
  expect.assertions(3)

  seq((value) => {
    expect(expression(value)).toBeTruthy()
  })
})

test('Factory.seq().walk() should walk the sequence', () => {
  let seq = Fib.Factory.seq(0, 1, 10).walk()

  let assumptions = [1, 1, 2, 3, 5, 8]

  // assuming the values are: 1,1,2,3,5,8
  // we'll have 6 values that hold true
  expect.assertions(6)

  seq((value) => {
    expect(assumptions.includes(value)).toBeTruthy()
  })
})
