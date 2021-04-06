// Given a string s, consisting of "X" and "Y"s, delete the minimum number of 
// characters such that there's no consecutive "X" and no consecutive "Y".

const consecutiveDuplicates = s => {
  const result = [], str = s.split('')
  let current
  str.forEach((char, i) => {
    current = char
    if (current !== str[i - 1]) {
      result.push(char)
    }
  })
  return result.join('')
}