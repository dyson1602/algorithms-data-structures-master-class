// You are given a string s where each character is "L" meaning you moved one 
//unit left, "R" meaning you moved one unit right, or "?" meaning either "L" or "R".

// Given you are at position 0, return the maximum possible distance you could
// be from 0 by replacing "?" with "L" or "R".

const furthestFromOrigin = s => {
  let distance = 0
  let qMarks = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") distance--
    if (s[i] === "R") distance++
    if (s[i] === "?") qMarks++
  }
  distance > 0 ? distance += qMarks : distance -= qMarks
  return Math.abs(distance)
}