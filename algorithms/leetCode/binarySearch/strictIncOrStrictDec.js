// Given a list of integers nums, return whether the list is strictly increasing 
// or strictly decreasing.

const strictIncOrDec = nums => {
  let decreasing = true
  let increasing = true
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] <= nums[i]) {
      increasing = false
      break
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] >= nums[i]) {
      decreasing = false
      break
    }
  }
  return decreasing || increasing
}