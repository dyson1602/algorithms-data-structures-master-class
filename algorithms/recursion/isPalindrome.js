//Write a recursive function called isPalindrome, which returns true if the
//string passed to it is a palindrome (reads the same forward and backward).
//Otherwise, it returns false.

//Example
//1. isPalindrome('awesome') //false
//2. isPalindrome('foobar') //false
//3. isPalindrome('tacocat') //true
//4. isPalindrome('amanaplanacanalpanama') //true
//5. isPalindrome('amanaplanacanalpandemonium') //false

//   base case: 1 letter or no letters left, return true
//1. check first and last letter to see if they match
//2. if they don't match, return false
//3. if they match, slice them off
//4. recursively call isPalindrome with smaller string


function isPalindrome(string) {
  if (string.length === 0 || string.length === 1) return true
  else if (string.slice(0,1) !== string.slice(-1)) return false
  else return isPalindrome(string.slice(1,-1))
}

console.log(isPalindrome("racecar")) //true
console.log(isPalindrome("tacocat")) //true
console.log(isPalindrome("notone")) //false