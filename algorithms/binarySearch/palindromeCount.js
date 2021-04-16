// You are given a string s and an integer k. Return the number of palindromes you 
// can construct of length k using only letters in s. Letters can be used more than 
// once.

const palindromeCount = (s, k) => {
  const set = new Set(s)
  return set.size ** Math.round(k / 2)
}