const Fib = require('lib')

test('Module to have Filters', () => {
  expect(Fib.Filters).toBeDefined()
  expect(Fib.Filters).toBeInstanceOf(Object)
})

test('Filters to be defined', () => {
  expect(Fib.Filters.Evens).toBeInstanceOf(Function)
  expect(Fib.Filters.Odds).toBeInstanceOf(Function)
})

test('Filters.Evens should check for Even numbers', () => {
  expect(Fib.Filters.Evens(2)).toBeTruthy()
  expect(Fib.Filters.Evens(1)).toBeFalsy()
})

test('Filters.Odds should check for Odds numbers', () => {
  expect(Fib.Filters.Odds(1)).toBeTruthy()
  expect(Fib.Filters.Odds(2)).toBeFalsy()
})
