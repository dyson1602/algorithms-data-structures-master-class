// Given a lowercase alphabet string s, determine whether it has all unique characters.

const aUniqueString = s => {
  const set = new Set()
  let result = true
  s.split('').forEach(char => {
    if (set.has(char)) result = false
    set.add(char)
  })
  return result
}