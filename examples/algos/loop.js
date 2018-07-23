(function fib (last, curr, max) {
  let temp

  while (curr <= max) {
    console.log(curr)

    temp = parseInt(last)
    last = curr
    curr = curr + temp
  }
})(0, 1, 4000000)
