// You’re given a string s containing letters of three types, R, B, and ..

// R represents your current position, B represents a blocked position, and . 
// represents an empty position. In one step, you can move to any adjacent position 
// to your current position, as long as it is empty. Can you reach either the 
// leftmost position or the rightmost position?

// Return true if you can reach either the leftmost or the rightmost position, 
// or false if you cannot.


const rookieMistake = s => {
  let bR = s.split('').filter(char => char === "B" || char === "R")
  return bR[0] === "R" || bR[bR.length-1] === "R" ? true : false
}