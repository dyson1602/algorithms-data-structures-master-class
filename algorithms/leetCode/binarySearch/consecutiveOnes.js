// You are given a list of integers nums which contains at least one 1. Return whether all the 1s appear consecutively.

const consecutiveOnes = nums => {
  let pointer = 0
  let one = false
  while (pointer < nums.length) {
    if (nums[pointer] === 1) one = true
    else if (one && nums[pointer + 1] === 1) return false
    pointer++
  }
  return true
}