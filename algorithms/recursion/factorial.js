
//recursive solution

function factorial(num) {
  if (num === 1) return num
  return num * factorial(num - 1)
}



//iterative solution

function iFactorial(num){
  let total = 1
  for (let i = num; i > 1; i--){
    total *= i
  }
  return total
}