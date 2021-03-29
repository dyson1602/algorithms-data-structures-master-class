// You are given a string s containing lowercase and uppercase alphabet characters 
// as well as digits from "0" to "9". Return whether s is a palindrome if we only 
// consider the lowercase alphabet characters.

//WHITEBOARD
// "a" is 97, "z" is 122 for charCodeAt()
//split the string into an array, filter anything not included in the charCodeAt() between 96 and 123
//two pointer comparison from start and finish of new array until left pointer is greater than right
//return false if not palindromic
//return true

const noisyPalindrome = s => {
  const lowercase = s.split('').filter(char => char.charCodeAt() > 96 && char.charCodeAt() < 123)
  let left = 0, right = lowercase.length - 1
  while (left < right) {
    if (lowercase[left] !== lowercase[right]) return false
    else {
      left++
      right--
    }
  }
  return true
}