// Given an integer n, we apply this transformation until it becomes a 1: take each 
// of the digits in n, square it, and then take their sum.

// Return whether n will end up in 1 after the transformations.

const happyNumbers = n => {
  const set = new Set()

  while (!set.has(n)) {
    set.add(n)
    const tempStrArray = n.toString().split('')
    const tempArray = tempStrArray.map(char => parseInt(char))

    n = tempArray.reduce((sum, val) => {
      return sum += val ** 2
    }, 0)

    if (n === 1) {
      return true
    }
  }
  return false
}

const happyNumbersNoStrings = n => {
  const set = new Set()

  while (!set.has(n)) {
    set.add(n)

    let sum = 0
    while (n > 0) {
      sum += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
    }
    n = sum
    if (n === 1) {
      return true
    }
  }
  return false
}