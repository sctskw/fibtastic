let Fib = require('lib')
let Module = require('index')

test('lib should have proper interface', () => {
  expect(Fib).toBeInstanceOf(Object)
  expect(Fib.Factory).toBeDefined()
  expect(Fib.Iterator).toBeDefined()
  expect(Fib.Filters).toBeDefined()
})

test('module should have proper interface', () => {
  expect(Module).toBeInstanceOf(Object)
  expect(Module.Factory).toBeDefined()
  expect(Module.Iterator).toBeDefined()
  expect(Module.Filters).toBeDefined()
})
