// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


const rotate = (nums, k) => {
  let movedNums = nums.splice(nums.length - k)
  movedNums.reverse().forEach(num => nums.unshift(num))
  return nums
};

//define a temp variable
//set temp = to current
//count forward k places
//replace new position with temp, and set temp equal to former new pos variable
//continue for ?? 
const rotateInPlace = (nums, k) => {
  let temp = nums[0], newTemp
  let idx = 0
  let length = nums.length
  let count = 0
  while (count < length) {
    if (idx + k >= length) {
      newTemp = nums[(k - (length - idx))]
      nums[(k - (length - idx))] = temp
      temp = newTemp
    } else {
      newTemp = nums[idx + k]
      nums[idx + k] = temp
      temp = newTemp
    }
    if (idx + k >= length) {
      idx = (k - (length - idx))
    } else {
      idx += k
    }
    count++
  }
  return nums
}

let arr1 = [1, 2, 3, 4, 5, 6, 7] //[5, 6, 7, 1, 2, 3, 4]
let arr2 = [-1, -100, 3, 99] //[3, 99, -1, -100]


// console.log(rotateInPlace(arr1, 3))
// console.log(rotateInPlace(arr2, 2))

console.log(rotate(arr1, 3))
console.log(rotate(arr2, 2))