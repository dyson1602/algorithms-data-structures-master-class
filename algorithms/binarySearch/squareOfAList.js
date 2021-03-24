// Given a list of integers sorted in ascending order nums, square 
// the elements and give the output in sorted order.

const squareOfAList = nums => {
  let squared = []
  for (let i = 0; i < nums.length; i++) {
    squared.push(nums[i] * nums[i])
  }
  return squared.sort((a, b) => a - b)
}