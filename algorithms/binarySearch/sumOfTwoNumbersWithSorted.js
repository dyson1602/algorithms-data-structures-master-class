// Given a list of integers nums sorted in ascending order and an integer k, return 
// whether any two elements from the list add up to k. You may not use the same element twice.

// Note: Numbers can be negative or 0.

// This should be done in \mathcal{O}(1)O(1) space.


const sumOfTwoNumbersWithSortedList = (nums, k) => {
  let start = 0
  let end = nums.length - 1
  while (end > start) {
    if (nums[start] + nums[end] === k) {
      return true
    } else if (nums[start] + nums[end] < k) {
      start++
    } else if (nums[start] + nums[end] > k) {
      end--
    } else {
      break
    }
  }

  return false
}