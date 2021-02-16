//Write a function called productOfArry which takes in an array of numbers and returns the product of them all.

//Example
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


//helper method style
//1. base case array.length === 1 return array[0]
//2. return array[0] * productOfArray(arr.slice(0))

function productOfArray(arr){
  if (arr.length === 1) return arr[0]
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,4,5])) // 120
console.log(productOfArray([10,2,3,4,5])) // 1200
