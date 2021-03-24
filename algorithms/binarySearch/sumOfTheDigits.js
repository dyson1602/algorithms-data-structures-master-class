// Given a positive integer num, return the sum of its digits.

// Bonus: Can you do it without using strings?

const sumOfTheDigitsRecursive = num => {
  let sum = 0
  function sumOfDigits(num) {
    if (num < 10) {
      sum += num
      return
    }
    let digit = (num % 10)
    sum += digit
    sumOfDigits((num - digit) / 10)
  }
  sumOfDigits(num)
  return sum
}
const sumOfTheDigitsWhile = num => {
  let sum = 0
  while (num) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}
const sumOfTheDigitsString = num => {
  let sum = 0
  for (let n of num.toString()) {
    sum += parseInt(n)
  }
  return sum
}