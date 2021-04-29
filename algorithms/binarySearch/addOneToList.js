// You are given a list of integers nums, representing a decimal number and nums[i] 
// is between [0, 9].

// For example, [1, 3, 9] represents the number 139.

// Return the same list in the same representation except modified so that 1 is 
// added to the number.

const addOneToList = nums => {
  let pointer = nums.length - 1

  function addOne() {
    if (pointer < 0) nums.unshift(1)
    if (nums[pointer] + 1 === 10) {
      nums[pointer] = 0
      pointer -= 1
      addOne()
    } else {
      nums[pointer] += 1
    }
  }

  addOne()

  return nums
}