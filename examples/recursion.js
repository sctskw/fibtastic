function fib (fn1, fn2, max) {
  if (fn2 >= max) return false
  console.log(fn2)
  return fib(fn2, fn1 + fn2, max)
}

fib(0, 1, 4000000)
