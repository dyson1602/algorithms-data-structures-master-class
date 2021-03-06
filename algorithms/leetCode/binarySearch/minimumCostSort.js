// Given a list of integers nums, return the minimum cost of sorting the list in ascending or descending order. 
// The cost is defined as the sum of absolute differences between any element's old and new value.

const minimumCostSort = nums => {
  let newNums = [...nums].sort((a, b) => a - b)
  let costF = 0
  let costR = 0
  for (let i = 0; i < nums.length; i++) {
    costF += Math.abs(nums[i] - newNums[i])
  }
  newNums.reverse()
  for (let i = 0; i < nums.length; i++) {
    costR += Math.abs(nums[i] - newNums[i])
  }
  return costF > costR ? costR : costF
}