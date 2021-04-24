// You are given a list of integers nums of length n where all numbers in the list 
// are from the interval [1, n][1,n] and some elements appear twice while others only once. Return all the numbers from [1, n][1,n] that are not in the list, sorted in ascending order.

// Can you do it in \mathcal{O}(n)O(n) time, modify nums in-place and use 
// \mathcal{O}(1)O(1) additional space?

const missingNumsFromOneToN = nums => {
  const n = nums.length, missingNums = []
  const set = new Set(nums)

  let num = 1

  while (num <= n) {
    if (!set.has(num)) {
      missingNums.push(num)
    }
    num += 1
  }
  return missingNums
}