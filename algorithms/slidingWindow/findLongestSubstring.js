//Write a function called findLongestSubString, which accepts a string and returns the
//length of the longest substring with all the distinct characters.

//Time: O(n), Space O(1)

//1. check string for 0 length
//2. set left marker, set right marker
//3. build set
//4. check right value in string to see if it is in set, if not add to set and
//   check max length, increase right pointer by 1
//5. if the value is in the set and the value at each pointer is the same, 
//   increment the left and right pointers (no need to add and remove same value)
//6. else remove the left pointer value from the set and move pointer right
//7. return max length

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







// console.log("set:", set, "left: ", left, "right: ", right)