// Given a list of integer nums, return the earliest index i such that the sum of 
// the numbers left of i is equal to the sum of numbers right of i. If there's no 
// solution, return -1.

// Sum of an empty list is defined to be 0.

const indexWithEqualLeftAndRightSums = nums => {
  const fullSum = nums.reduce((sum, num) => sum + num)
  let leftSum = 0, rightSum = 0, tempFullSum

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) leftSum = 0
    else leftSum = leftSum + nums[i - 1]

    tempFullSum = fullSum - nums[i]
    rightSum = tempFullSum - leftSum
    if (leftSum === rightSum) return i
  }
  return -1
}