// Given an integer n, return the sum of the first n positive odd integers.

const sumOfFIrstNOddIntegers = n => {
  let sum = 0, count = 0, oddInt = 1
  while (count < n) {
    sum += oddInt
    oddInt += 2
    count += 1
  }
  return sum
}