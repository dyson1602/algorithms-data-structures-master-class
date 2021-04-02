// Given a list of integers nums, return whether there's an integer whose frequency 
// in the list is same as its value.

const equivalencyAndFrequency = nums => {
  let counter = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (counter[num]) {
      counter++
      if (counter[num] === num) return true
    } else {
      counter[num] = 1
    }
  }
  return false
}