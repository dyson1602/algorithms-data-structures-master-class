//Write a function called recursiveRange which accepts a number and adds up all the numbers from
//0 to the number passed to the function.

//Example
// recursiveRange(6) //21
// recursiveRange(10) //55

//1. base case if number === 1 return 1
//2. return num + recursiveRange(num - 1)

function recursiveRange(num){
  if (num === 1) return 1
  return num + recursiveRange(num - 1)
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55