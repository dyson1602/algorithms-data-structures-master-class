// Given a list of integers nums, return whether the number of occurrences of every value in the array is unique.

// Note: Numbers can be negative.

const uniqueOccurrences = nums => {
  let count = {}
  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) count[nums[i]] = 1
    else count[nums[i]]++
  }
  let set = new Set()
  for (let key in count) {
    if (!set.has(key)) set.add(count[key])
  }
  return set.size === Object.keys(count).length ? true : false
}