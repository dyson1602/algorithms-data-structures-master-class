// Given a list of lowercase alphabet strings words, return the longest common prefix.

const largestCommonPrefix = words => {
  let str = ""
  let char = ""
  let loop = Math.min(...words.map(word => word.length))
  for (let i = 0; i < loop; i++) {
    let char = words[0][i]
    for (let j = 0; j < words.length; j++) {
      if (words[j][i] !== char) break
      if (j === words.length - 1) str = str + char
    }
  }
  return str
}