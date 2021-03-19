// Given two strings s0 and s1, return whether they are anagrams of each other.

const anagramCheck = (s0, s1) => {
  if (s0.length !== s1.length) return false
  let obj = {}

  for (let i = 0; i < s0.length; i++) {
    if (!obj[s0[i]]) obj[s0[i]] = 1
    else obj[s0[i]]++
  }

  for (let j = 0; j < s1.length; j++) {
    if (!obj[s1[j]]) return false
    else obj[s1[j]]--
  }
  return true
}