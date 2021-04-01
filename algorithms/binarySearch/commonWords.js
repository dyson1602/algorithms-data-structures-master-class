// Given two strings s0 and s1, each representing a sentence, return the number of 
// unique words that are shared between the two sentences.

// Note: words are case-insensitive so "hello" and "Hello" are the same word.

const commonWords = (s0, s1) => {
  if (!s0.length || !s1.length) return 0
  s0 = s0.toLowerCase()
  s1 = s1.toLowerCase()
  const words = new Set(s0.split(' '))
  let count = 0
  s1.split(' ').forEach(word => {
    if (words.has(word)) {
      count++
      words.delete(word)
    }
  })
  return count
}