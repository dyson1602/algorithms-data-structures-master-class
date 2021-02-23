//write a function that find out if the sum of all of the digits in the number,
//each raised to the power of the number of digits, is equal to hte number

//ex: 153 => 1^3 + 5^3 + 3^3

function narc(num) {
  let sum = 0
  let countNum = num
  let count = 0
  while (countNum > 0) {
    if (countNum > 0) {
      countNum = Math.floor(countNum / 10)
      count++
    }
  }
  let tempNum = num
  while (tempNum > 0) {
    sum += (tempNum % 10) ** count
    if (tempNum < 10) break
    tempNum = Math.floor(tempNum/10)
  }
  return sum === num ? true : false
}

console.log(narc(153))