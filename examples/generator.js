function* fibonacci (fn1, fn2, max=100) {

  let head = parseInt(fn2)
  let last = parseInt(fn1)
  let temp

  while (head <= max) {

    yield head

    temp = parseInt(last)
    last = head
    head = head + temp

  }

  yield false
}


function main (fn1, fn2, max) {
  let fib = fibonacci(fn1, fn2, max)

  return (handler) => {
    let idx = 0
    for(let value of fib) {
      if(!value) break
      handler.call(this, value, idx)
      idx++
    }
  }
}

// exec
main(0, 1, 4000000)( (value, idx) => {

  if (value % 2 > 0) return false

  console.log(idx, value)
})




