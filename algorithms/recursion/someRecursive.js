//Write a function called someRecursive that accepts an array
//and a callback. The function returns true if a single value 
//in the array returns true when passed to the callback. Otherwise,
//it returns false.

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

//1. base case: array length is 0 return false
//2. ternary to check if last value in callback returns true
//3. if true return true, else return someRecursive with the shortened array
//    having popped off hte last value in the array

function someRecursive(array, callback){
  console.log(array.slice(-1))
  if (array.length === 0) return false
  return callback(array.slice(-1)) ? true : someRecursive(array.slice(0,-1), callback)
}

console.log(someRecursive([1,2,3,4],isOdd))
console.log(someRecursive([4,6,8,9],isOdd))
console.log(someRecursive([4,6,8],isOdd))
console.log(someRecursive([4,6,8], val => val > 10))