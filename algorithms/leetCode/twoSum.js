//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

function twoSum(nums, target) {
  let map = new Map
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i]
    if (map.has(comp)) {
      return [map.get(comp), i]
    }
    map.set(nums[i], i)
    console.log(map)
  }
}

console.log(twoSum([1,2,3,4,5,6,7,8],15))