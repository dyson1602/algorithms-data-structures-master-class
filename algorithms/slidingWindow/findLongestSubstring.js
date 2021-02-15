//Write a function called findLongestSubString, which accepts a string and returns the
//length of the longest substring with all the distinct characters.

//Time: O(n)

//1. check string for 0 length
//2. set left marker, set right marker
//3. build set
//4. check right value in string to see if it is in set, if not add to set and add 1 to maxLen
//5. move right marker to the right and check that value

function findLongestSubString(string) {
  if (string.length === 0) return 0

  let set = new Set()
  let left = 0
  let right = 0
  let maxLen = 1

  while (right < string.length) {
    if (!set.has(string[right])) {
      set.add(string[right])
      maxLen = Math.max(maxLen, right - left + 1)
      right++
    } else if (set.has(string[right]) && string[right] === string[left]) {
      left++
      right++
    } else {
      set.delete(string[left])
      left++
    }
  }
  return maxLen
}
console.log(findLongestSubString("samueljackson"))