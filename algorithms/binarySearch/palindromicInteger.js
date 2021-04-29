// Given a non-negative integer num, return whether it is a palindrome.

// Bonus: Can you solve it without using strings?

const palindromicInteger = num => {
  const numsArr = []
  while (num) {
    numsArr.unshift(num % 10)
    num = Math.floor(num / 10)
  }

  let left = 0, right = numsArr.length - 1
  while (left < right) {
    if (numsArr[left] !== numsArr[right]) {
      return false
    } else {
      left += 1
      right -= 1
    }
  }
  return true
}