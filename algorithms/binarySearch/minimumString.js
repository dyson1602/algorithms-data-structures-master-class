// You are given two strings s and t of equal length only consisting of lowercase 
// letters. Assuming that you can first rearrange s into any order, return the 
// minimum number of changes needed to turn s into t.

const minimumString = (s, t) => {
  const counter = {}
  let count = 0

  for (let i = 0; i < t.length; i++) {
    counter[t[i]] = counter[t[i]]++ || 1
  }

  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]]) counter[s[i]]--
    else count++
  }

  return count
}