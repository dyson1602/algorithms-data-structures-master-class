// Given a list of integers nums, sort the array such that:

// All even numbers are sorted in increasing order
// All odd numbers are sorted in decreasing order
// The relative positions of the even and odd numbers remain the same

const mixedSorting = nums => {
  let odds = [], evens = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) evens.push(nums[i])
    else odds.push(nums[i])
  }
  odds.sort((a, b) => a - b)
  evens.sort((a, b) => a - b)
  let evenIdx = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 === 0) {
      nums[j] = evens[evenIdx]
      evenIdx++
    }
    else nums[j] = odds.pop()
  }
  return nums
}