// Given a list of integers nums, replace every nums[i] with the smallest integer 
// left of i. Replace nums[0] with 0.

const listMinReplacement = nums => {
  let min = nums[0]
  let possMin = 0
  for (let i = 1; i < nums.length; i++) {
    possMin = nums[i]
    nums[i] = min
    if (possMin < min) min = possMin
  }
  nums[0] = 0
  return nums
}