// Given a lowercase alphabet string s, return the index of the first recurring 
// character in it. If there are no recurring characters, return -1.

const recurringChar = s => {
  if (s.length < 2) return -1
  const set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) set.add(s[i])
    else return i
  }
  return -1
}