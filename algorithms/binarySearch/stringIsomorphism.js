// Given lowercase alphabet strings s, and t return whether you can create a 1-to-1 
// mapping for each letter in s to another letter (could be the same letter) such 
// that s could be mapped to t, with the ordering of characters preserved.

const stringIsomorphism = (s, t) => {
  if (s.length !== t.length) return false
  let pointer = 0
  const mapper = {}

  while (pointer < s.length) {
    if (!mapper[s[pointer]] && !Object.values(mapper).includes(t[pointer])) {
      mapper[s[pointer]] = t[pointer]
      pointer++
    } else if (mapper[s[pointer]] !== t[pointer]) return false
    else pointer++
  }
  return true
}

//second solution, less legible, but "more clever" the .some() method is a good
//one to learn, that i've never seen used. must remember it
const stringIsomorphism = (s, t,
  f = (s, t, d = {}) => ![...s].some((v, i) => {
    if (d[v] && d[v] !== t[i])
      return 1
    d[v] = t[i]
  })) => f(s, t) && f(t, s)