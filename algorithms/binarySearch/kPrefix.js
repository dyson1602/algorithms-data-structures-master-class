// Given a list of integers nums and an integer k, return the maximum possible i 
// where nums[0] + nums[1] + ...  + nums[i] ≤ k. Return -1 if no valid i exists.

const kPrefix = (nums, k) => {
  let sum = 0, max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum <= k) max = i
  }
  return max === -Infinity ? -1 : max
}