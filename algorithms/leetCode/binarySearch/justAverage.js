// Given a list of integers nums and an integer k, return true if you can remove 
// exactly one element from the list to make the average equal to exactly k.

// Constraints

// 2 ≤ n ≤ 1,000 where n is length of nums
// nums[i], k ≤ 1,000,000


const justAverage = (nums, k) => {
  let result = false
  let sum = nums.reduce((sum, num) => sum + num)

  function average(nums, idx) {
    return (sum - nums[idx]) / (nums.length - 1)
  }

  for (let idx = 0; idx < nums.length; idx++) {
    average(nums, idx) === k ? result = true : null
  }

  return result
}