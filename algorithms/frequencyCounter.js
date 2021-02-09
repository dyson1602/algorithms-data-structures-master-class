//Write a function called same, which accepts two arrays. The function should return true if 
//every value in the array has it's corresponding value squared in the second array. The 
//frequency of values must be the same.

//
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 9, 16, 4, 25]
const arr3 = [1, 9, 16, 4, 26]

//naive solution
//this solution has O(n^2) time, because it has to iterate of the 2nd array every time

// function same(arr1, arr2){
//   if(arr1.length !== arr2.length){
//     return false
//   }
//   for (let i = 0; i < arr1.length; i++){
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)
//     if (correctIndex === -1){
//       return false
//     }
//     arr2.splice(correctIndex,1)
//   }
//   return true
// }

// console.log(same(arr1,arr2)) //expect true
// console.log(same(arr1,arr3)) //expect false

//refactored solution

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  //iterating over two unnested arrays is like O(2n), or O(n), rather than quadratic
  for (let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    //key is the value of the number in the array
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}

console.log(same(arr1,arr2)) //expect true
console.log(same(arr1,arr3)) //expect false