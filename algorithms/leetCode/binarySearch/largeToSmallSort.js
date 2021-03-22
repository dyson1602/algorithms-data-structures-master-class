// Given a list of integers nums, sort the list in the following way:

// First number is the maximum
// Second number is the minimum
// Third number is the 2nd maximum
// Fourth number is the 2nd minimum
// And so on.

const largeToSmallSort = nums => {

  let sorted = [...nums.sort((a, b) => b - a)]
  let result = []

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(sorted.shift())
    } else {
      result.push(sorted.pop())
    }
  }

  return result
}