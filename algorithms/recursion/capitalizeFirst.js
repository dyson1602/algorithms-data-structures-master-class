//Write a recursive function called capitalizeFirst. Given an array of strings,
//capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//1. base case: array is empty array.lenth === 0
//2. define new array of capitalized strings
//3. capitalize first letter of 0 index and push into new array
//4. return array concattenated with recrusive call

function capitalizeFirst(array){
  if (array.length === 0) return []
  let capArray = []
  capArray.push(array[0][0].toUpperCase().concat(array[0].slice(1)))
  return capArray.concat(capitalizeFirst(array.slice(1)))
}

let array = ['car','taco','banana','fish','hammer','whale']

console.log(capitalizeFirst(array))