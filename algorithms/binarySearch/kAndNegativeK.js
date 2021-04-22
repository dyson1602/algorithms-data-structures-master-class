// Given a list of integers nums, return the largest integer k where k and -k both 
// exist in nums (they can be the same integer). If there's no such integer, return -1.

const kAndNegativeK = nums => {
  const set = new Set(nums)
  let max = -1

  for (let val of set.values()) {
    if (set.has(-val)) {
      max = Math.max(max, Math.abs(val))
    }
  }
  return max
}