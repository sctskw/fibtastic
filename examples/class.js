#!/usr/bin/env node

class Fib {

  constructor (last, pointer) {
    this.update(last, pointer)

    this.max = 4000000
    this.value = 0
  }

  run () {

    while (this.pointer < this.max) {

      let last = parseInt(this.last)
      let curr = parseInt(this.pointer) //clone it

      this.update(curr, curr + last)

    }

  }

  update (last, pointer) {

    if(!this.last) console.log(last)

    console.log(pointer)

    this.process(pointer)

    this.last = last
    this.pointer = pointer

  }

  process (value) {
    if (!(value % 2)) {
      this.value = (this.value || 0) + value
      console.log('=>', this.value)
      return true
    }
  }

}

let runner = new Fib(1, 2)

runner.run()
