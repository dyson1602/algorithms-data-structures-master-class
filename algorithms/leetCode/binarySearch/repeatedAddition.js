// Given a positive integer n, sum all of its digits to get a new number. Repeat 
// this operation until it's less than 10.

const repeatedAddition = n => {
  let sum = n.toString()
  while (sum >= 10) {
    let nArr = sum.split('').map(sNum => parseInt(sNum))
    sum = nArr.reduce((sum, num) => sum + num).toString()
  }
  return parseInt(sum)
}