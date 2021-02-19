//Write a function called capitalizeWords. Given an array of words, return a new
//array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// pure recursion
//1. define new capitalized array
//2. push toUpperCase word into cap array
//3. set cap array equal to concatinating recursive call of function with the
//     sliced array
//4. return cap array

function capitalizeWords(array){
  let capArray = []
  if (array.length === 0) return []
  else {
    capArray.push(array[0].toUpperCase())
    capArray = capArray.concat(capitalizeWords(array.slice(1)))
  }
  return capArray
}

let words = ['i', 'am', 'learning', 'recursion']

console.log(capitalizeWords(words))