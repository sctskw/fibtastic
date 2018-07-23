function fib (a, b, n) {
  if (!n) return a
  return fib(b, a+b, n-1)
}

console.log(fib(0,1,50))
