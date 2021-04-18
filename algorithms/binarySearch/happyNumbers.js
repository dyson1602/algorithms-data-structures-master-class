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