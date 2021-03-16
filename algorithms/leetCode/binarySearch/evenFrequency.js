// Given a list of integers nums, return whether all numbers appear an even number of times.

// This should be done in \mathcal{O}(1)O(1) space.

const evenFrequency = nums => {
  let numsObj = {}

  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]]) numsObj[nums[i]] += 1
    else numsObj[nums[i]] = 1
  }

  return Object.values(numsObj).filter(num => num % 2 !== 0).length 
    ? false : true
}

console.log(evenFrequency([2, 4, 4, 2, 3, 3]))