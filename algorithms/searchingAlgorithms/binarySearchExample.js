//Write a binarySearch function that accepts a sorted array and a value.

//1. Create a pointer at the start of the array, and a right pointer at the end
//     of the array.
//2. Create while loop that loops so long as the left pointer is left of the
//     right pointer. if it passes it, it means the value must not exist
//3. Create a pointer in the middle
//4. If you find the value you want return the index
//5. If the value is too small, move the left index, if the value is too large
//     move the right index.
//6. If the value is never found, return -1


//this solution is a little sloppy and could be refactored down a couple lines
//but for the purposes of this question it works.

function binarySearch(arr, val){
  let left = 0
  let right = arr.length - 1
  while (left < right){
    let middle = Math.floor((right + left)/2)
    if (arr[middle] === val) return middle
    if (arr[left] === val) return left
    if (arr[right] === val) return right  
    if (arr[middle] > val) right = middle - 1
    else left = middle + 1
  }
  return -1
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(binarySearch(array, 11))