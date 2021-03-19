// Given two strings s0 and s1, return the two strings interleaved, starting with 
// s0. If there are leftover characters in a string they should be added to the end.

const interLeavedString = (s0, s1) => {
  let s = ""
  let max = Math.max(s0.length, s1.length)

  for (let i = 0; i < max; i++) {
    if (s0[i]) s += s0[i]
    if (s1[i]) s += s1[i]
  }
  return s
}