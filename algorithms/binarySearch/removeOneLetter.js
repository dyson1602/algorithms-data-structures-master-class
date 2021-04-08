// Given two strings s0 and s1, return whether you can obtain s1 by removing 1 
// letter from s0.

const removeOneLetter = (s0, s1) => {
  if (s0.length !== s1.length + 1) return false

  const sArr0 = s0.split(''), sArr1 = s1.split('')

  sArr0.forEach((char, idx) => {
    if (char !== sArr1[idx]) sArr0.splice(idx, 1)
  })

  return sArr0.join('') === sArr1.join('') ? true : false
}