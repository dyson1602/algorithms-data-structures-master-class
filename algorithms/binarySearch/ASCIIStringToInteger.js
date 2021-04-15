// You are given a string s containing digits from "0" to "9" and lowercase 
// alphabet characters. Return the sum of the numbers found in s.

const aSCIIStringToInteger = s => {
  const str = s.split(/[^0-9]/)

  return str.reduce((sum, val) => {
    if (val.length) {
      return sum += parseInt(val)
    } else {
      return sum
    }
  }, 0)
}