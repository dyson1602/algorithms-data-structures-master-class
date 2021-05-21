// Given a list of integers nums, put all the zeros to the back of the list by 
// modifying the list in-place. The relative ordering of other elements should stay 
// the same.

// Can you do it in \mathcal{O}(1)O(1) additional space?

const inPlaceMoveZeroesToEnd = nums => {
  let left = 0, right = 1

  while (right < nums.length) {
    if (nums[right] === 0 && nums[left] === 0) {
      right += 1
    } else if (nums[left] === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left += 1
      right += 1
    }
    else {
      left += 1
      right += 1
    }
  }
  return nums
}