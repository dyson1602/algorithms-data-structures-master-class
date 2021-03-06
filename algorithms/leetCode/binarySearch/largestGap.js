// Given a list of integers nums, return the largest difference of two consecutive integers in the sorted version of nums.

function maxDiff(nums) {
  nums.sort((a, b) => a - b)
  let maxDiff = -Infinity
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = Math.abs(nums[i] - nums[i + 1])
    if (diff > maxDiff) maxDiff = diff
  }
  return maxDiff
}