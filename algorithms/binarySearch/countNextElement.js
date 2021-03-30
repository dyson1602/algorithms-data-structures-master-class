// Given a list of integers nums, return the number of elements x there are such 
// that x + 1 exists as well.

const countNextElement = nums => {
  const obj = {}
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = nums[i]
  }
  for (let j = 0; j < nums.length; j++) {
    if (obj[nums[j] + 1]) count++
  }
  return count
}