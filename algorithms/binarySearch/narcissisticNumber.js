// Given an integer n, return whether it is equal to the sum of its own digits 
// raised to the power of the number of digits.

const narcissisticNumber = n => {
  const digits = n.toString().split('').map(digit => parseInt(digit))
  const pow = digits.length

  return digits.reduce((sum, digit) => {
    return sum += digit ** pow
  }, 0) === n ? true : false
}