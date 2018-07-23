function fib(last, curr) {

  let max = 4000000
  let value = 0
  let temp = 0

  console.log(last)
  console.log(curr)

  while (curr <= max) {

    if ( !(curr % 2) ) {
      value = value + curr
      console.log('=>', value)
    }

    temp = parseInt(last)
    last = curr
    curr = curr + temp

    console.log(curr)

  }

  return value

}

console.log('===', fib(1, 2))
