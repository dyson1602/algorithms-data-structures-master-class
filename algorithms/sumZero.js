//Write a function called sumZero which accepts a sorted array of integers. 
//The function should find the first paid where the sum is 0. Return an array 
//that includes both the values that sum to zero or undefined if a pair does not exist.

let arr1 = [-3, -2, -1, 0, 1, 2, 3] //[-3,3]
let arr2 = [-2, 0, 1, 3] //undefined
let arr3 = [1, 2, 3] //undefined

//naive solution with O(n^2) time and O(1) space
// function sumZero(arr){
//   for(let i = 0; i < arr.length; i++){
//     for (let j = i +1; j < arr.length; j++){
//       if (arr[i] + arr[j] === 0){
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// console.log(sumZero(arr1))
// console.log(sumZero(arr2))
// console.log(sumZero(arr3))

//refactored solution with O(n) time
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    console.log(left, right)
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
  return "There is no sum Zero pair"
}

console.log(sumZero(arr1))
console.log(sumZero(arr2))
console.log(sumZero(arr3))