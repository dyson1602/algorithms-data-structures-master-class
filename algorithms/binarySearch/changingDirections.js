// Given a list of integers nums, return the number of times that the list changes
// from positive-to-negative or negative-to-positive slope.


const changingDirections = nums => {
  let count = 0, slope = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      if (slope === -1) {
        count++
        slope = 1
      } else if (slope === 0) {
        slope = 1
      }
    } else if (nums[i] > nums[i + 1]) {
      if (slope === 1) {
        count++
        slope = -1
      } else if (slope === 0) {
        slope = -1
      }
    } else slope = 0
  }
  return count
}