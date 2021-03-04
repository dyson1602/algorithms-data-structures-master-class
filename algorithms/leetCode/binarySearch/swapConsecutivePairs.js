//Given an integer list nums, swap every consecutive even integer with each other.


function swapPairs(nums) {
  let right = 1
  let left = 0

  if (nums)

    while (right < nums.length) {
      if (nums[right] % 2 === 0 && nums[left] % 2 === 0) {
        [nums[right], nums[left]] = [nums[left], nums[right]]
        left = right + 1
        right += 2
      }
      else if (nums[right] % 2 !== 0) right++
      else if (nums[left] % 2 !== 0) left++
      else if (nums[left] % 2 === 0 && nums[right] % 2 !== 0) {
        right = left + 1
      }
    }
  return nums
}
