//Implement a function called countUniqueValues which accepts a sorted array, and counts the unique
//values in the array. There can be negative numbers in the array, but it will always be sorted.

const arr1 = [1, 1, 1, 1, 1, 2] //2
const arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] //7
const arr3 = [] //0
const arr4 = [-2, -1, -1, 0, 1] //4

function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  let left = 0
  let right = 1

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++
    } else {
      left++
      arr[left] = arr[right]
      right++
    }
  }
  return (left + 1)
}

console.log(countUniqueValues(arr1)) //2
console.log(countUniqueValues(arr2)) //7
console.log(countUniqueValues(arr3)) //0
console.log(countUniqueValues(arr4)) //4