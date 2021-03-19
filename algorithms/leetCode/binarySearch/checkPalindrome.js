// Given a string s, return whether it is a palindrome.

const checkPalindrome = s => {
  let left = 0, right = s.length - 1

  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else return false
  }
  return true
}