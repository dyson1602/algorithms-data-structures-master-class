// Given a list of integers nums, swap each consecutive even indexes with each 
// other, and swap each consecutive odd indexes with each other.

const swapConsecutiveIndexPairs = (nums) => {
  let j = 2
  for (let i = 0; i < nums.length; i += 4) {
    if (j < nums.length) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    j += 4
  }
  let k = 3
  for (let i = 1; i <= nums.length; i += 4) {
    if (k < nums.length) {
      [nums[i], nums[k]] = [nums[k], nums[i]]
    }
    k += 4
  }
  return nums
}