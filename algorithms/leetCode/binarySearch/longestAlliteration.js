// Given a list of lowercase alphabet strings words, return the length of the 
// longest contiguous sublist where all words share the same first letter.

const longestAlliteration = words => {
  if (words.length === 0) return 0

  let max = 1
  let tempMax = 1
  let prevChar, currentChar

  for (let i = 1; i < words.length; i++) {

    currentChar = words[i][0]
    prevChar = words[i - 1][0]

    if (currentChar === prevChar) {
      tempMax++
      max = Math.max(tempMax, max)
    }
    else {
      tempMax = 1
      prevChar = currentChar
    }
  }
  return max
}