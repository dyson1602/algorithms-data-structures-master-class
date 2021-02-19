//Write a linear search using the pseudocode that CS gives us.

//1. This function accepts an array, and a value
//2. Loop thru the entire array and check to see if the current element is
//     equal to the value given
//3. If it is, return the index of which they are equal
//4. If it is never found, return -1


function simpleLinearSearch(array, value){
  for (let ind of array){
    if (array[ind] === value) return ind
  }
  return -1
}

let nums = [1,2,3,4,5,6,7,8,9,10]

console.log(simpleLinearSearch(nums, 7))
console.log(simpleLinearSearch(nums, 17))