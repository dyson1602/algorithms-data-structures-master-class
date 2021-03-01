// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

let removeDuplicates = function(nums) {
  let idx = 0
  while(idx < nums.length - 1){
      if(nums[idx] === nums[idx+1]) nums.splice(idx+1,1)
      else idx++
  }
};