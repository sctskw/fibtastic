fibtastic
=========

A modular library with various utilities available to traverse the fibonacci
sequence

*Requires*

- Node >= 8.11

Install
=======

```
npm install --save sctskw/fibtastic
```

Include
========

```
const Fib = require('fibtastic')

const iter = new Fib.Iterator(0, 1, 100).toIter()

for (let value of iter) {
  console.log(value)
}

//1,1,2,3,5,8,13,21,34,55,89

```


--

Why?
====

Because,

Functional Programming (FP) is extremely useful when dealing with Array traversal and data manipulation. This library was inspired by FP utilities for the primitive Array object. By wrapping Fibonacci in an easy and extensible library using a similar approach to current FP adopted standards in modern day Javascript, we're able to create a nice and intuitive interface to be included in other modules.

Futhermore, it's just fun!

--


Examples
========

__Find the sum of the even-valued terms whos value does not exceed four million__

```
  const Fib = require('fibtastic')

  let sum = Fib.Iterator(1, 2, 4000000, Fib.Filters.Evens).sum()

  console.log(sum) //outputs 4613732

```

__Find the sum of the odd-valued terms whos value does not exceed four million__

```
  const Fib = require('fibtastic')

  let sum = Fib.Iterator(1, 2, 4000000, Fib.Filters.Odds).sum()

  console.log(sum) //outputs 4613730

```

__Find the sum of every value which does not exceed four million__

```
  const Fib = require('fibtastic')

  let sum = Fib.Iterator(0, 1, 4000000).sum()

  console.log(sum) //outputs 9227464

```

__Find the sum of every other value which does not exceed four million__

```
  const Fib = require('fibtastic')

  function customFilter(value, idx) => {
    //filter on odd numbered indexes to achieve "every other"
    return idx % 2 > 0
  }

  let sum = Fib.Iterator(0, 1, 4000000).filter(customFilter).sum()

  console.log(sum) //outputs 3524577

```
--


Running Tests
=============

*single run of full test suite*

```
npm test
```

*watch mode*

```
npm run test:watch
```

*debugger mode*

```
npm run test:debug
```
--

Future Work/Support
============
- Support ES6 import/export
- Input Validation on whether values are in fact true Fibonacci values