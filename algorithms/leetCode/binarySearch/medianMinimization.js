// Given a list of integers nums, split it into two lists of equal size where the absolute difference between each list's median is as small as possible and return this difference.

// Note: length of nums / 2 is guaranteed to be odd.


function medianMinimization(nums) {
  let numsOne = []
  let numsTwo = []
  nums.sort((a, b) => a - b)
  while (nums.length > 0) {
    let elem = nums.pop()
    if (nums.length % 2 === 0) {
      numsTwo.push(elem)
    } else {
      numsOne.push(elem)
    }
  }
  let oneMed = numsOne[(Math.floor(numsOne.length / 2))]
  let twoMed = numsTwo[(Math.floor(numsTwo.length / 2))]
  return Math.abs(oneMed - twoMed)
}
