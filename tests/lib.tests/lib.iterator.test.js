const Fib = require('lib')

test('Module should have Iterator', () => {
  expect(Fib.Iterator).toBeDefined()
  expect(Fib.Iterator).toBeInstanceOf(Function)
})

test('Fib.Iterator should instantiate proper interface', () => {
  let iter = new Fib.Iterator(0, 1, 10)

  expect(iter).toBeDefined()
  expect(iter.toIter).toBeInstanceOf(Function)
  expect(iter.toArray).toBeInstanceOf(Function)
})

test('Fib.Iterator.toIter should return a generator', () => {
  let iter = new Fib.Iterator(0, 1, 10).toIter()
  expect(iter.toString()).toContain('Generator')
})

test('Fib.Iterator.toIter should generate a sequence', () => {
  let assumptions = [1, 1, 2, 3, 5, 8]
  let iter = new Fib.Iterator(0, 1, 10).toIter()

  let idx = 0
  for (let value of iter) {
    expect(value).toEqual(assumptions[idx])
    idx++
  }
})

test('Fib.Iterator.toIter should track the true index', () => {
  let assumptions = [1, 1, 2, 3, 5, 8]
  let iter = new Fib.Iterator(0, 1, 10).toIter(true)

  for (let [value, idx] of iter) {
    expect(value).toEqual(assumptions[idx])
  }
})

test('Fib.Iterator.toArray should return an Array', () => {
  let assumptions = [1, 1, 2, 3, 5, 8]
  let values = new Fib.Iterator(0, 1, 10).toArray()

  expect(values.length).toBeGreaterThan(0)
  expect(values).toHaveLength(assumptions.length)
  expect(values).toEqual(assumptions)
})

test('Fib.Iterator.toArray should track the true index', () => {
  let assumptions = [1, 1, 2, 3, 5, 8]
  let values = new Fib.Iterator(0, 1, 10).toArray(true)

  expect.assertions(6)

  values.forEach((item) => {
    let [value, idx] = item
    expect(value).toEqual(assumptions[idx])
  })
})

test('Fib.Iterator should filter Even numbers', () => {
  let assumptions = [1, 1, 2, 3, 5, 8]
  let values = new Fib.Iterator(0, 1, 10, Fib.Filters.Evens).toArray(true)

  expect.assertions(7)

  expect(values).toHaveLength(2)

  values.forEach(function (item, idx) {
    let [value, index] = item
    expect(idx).not.toEqual(index)
    expect(index).toEqual(assumptions.indexOf(value))
    expect(value % 2).toEqual(0)
  })
})

test('Fib.Iterator should calculate the sum of all values', () => {
  let sum = new Fib.Iterator(0, 1, 10).sum()

  expect(sum).toEqual(20)
})

test('Fib.Iterator should calculate the sum of Evens', () => {
  let sum = new Fib.Iterator(0, 1, 10, Fib.Filters.Evens).sum()

  expect(sum).toEqual(10)
})

test('Fib.Iterator should calculate the sum of custom filter', () => {
  let sum = new Fib.Iterator(0, 1, 10)
    .filter((value, idx) => {
      return value === 1
    })
    .sum()

  expect(sum).toEqual(2)
})
