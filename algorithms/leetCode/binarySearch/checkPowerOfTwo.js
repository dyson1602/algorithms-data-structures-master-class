// Given an integer n greater than or equal to 0, return whether it is a power of two.

const checkPowerOfTwo = n => {
  if (n === 1 || n === 2) return true
  if (n === 0) return false
  let num = n
  while (num >= 2) {
    if (num % 2 === 0) num = num / 2
    else return false
  }
  return true
}