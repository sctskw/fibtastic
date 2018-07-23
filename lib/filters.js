function Evens(value, idx) {
  return value % 2 === 0
}

function Odds(value, idx) {
  return !Evens(value, idx)
}

module.exports = { Evens, Odds }

