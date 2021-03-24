// Given a non-negative integer n, return the length of the longest consecutive 
// run of 1s in its binary representation.

const longestConsecRunOfBinaries = n => {
  let bin = n.toString(2)
  let temp = 0, max = -Infinity
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1" && bin[i - 1] === "1") {
      temp++
      max = Math.max(temp, max)
    } else if (bin[i] === "1") {
      temp = 1
      max = Math.max(temp, max)
    }
  }
  return max === -Infinity ? temp : max
}