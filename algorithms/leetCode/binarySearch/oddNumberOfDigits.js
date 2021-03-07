// Given a list of positive integers nums, return the number of integers that have odd number of digits.

const oddNumberOfDigits = nums => {
  let strNums = [], count = 0
  nums.forEach(num => strNums.push(num.toString()))
  for (let i = 0; i < strNums.length; i++) {
    if (strNums[i].length % 2 !== 0) count++
  }
  return count
}