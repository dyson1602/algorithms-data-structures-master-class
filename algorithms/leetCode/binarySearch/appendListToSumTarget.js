// You are given a list of integers nums and integers k and target. Consider an 
// operation where we choose an integer -k ≤ e ≤ k and append it to nums.

// Return the minimum number of operations required such that the sum of nums equals 
// to target.

const appendListToSumTarget = (nums, k, target) => {
  let diff = target - nums.reduce((sum, num) => sum + num)
  let count = 0
  while (diff !== 0) {
    if (diff < 0) {
      if (diff <= -k) {
        diff = diff + k
        count++
      } else {
        diff = 0
        count++
      }
    } else {
      if (diff >= k) {
        diff = diff - k
        count++
      } else {
        diff = 0
        count++
      }
    }
  }
  return count
}