// NOTE: only useful for asking:
//
// what is the value of the fibonacci sequence at X

function fibonacci (n) {
  let q = Math.pow((1 + Math.sqrt(5)) / 2, n)
  let r = Math.pow(-2 / (1 + Math.sqrt(5)), n)

  return Math.round((q - r) / Math.sqrt(5))
}

console.log(fibonacci(50))
