//mergse sort

//function that merges two sorted arrays
//time: O(n+m), space: O(n+m)

//create an empty array, take a look at the smallest values in each array input
//while there are still values we haven't looked at
//if the value in the first array is smaller than the value in the second array
//push the value in the first array into our results and move on the the next
//value in the first array
//if the value in the first array is larger than the value in the second array
//push the value in the second array into our results and move on to the next
//value in the second array
//once we exhaust one array, push in all remaining values from the other array
//CS solution is different than this one, but I like my solution more
function merge(arr1, arr2) {
  let mergedArr = []
  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] < arr2[0]
      ? mergedArr.push(arr1.shift())
      : mergedArr.push(arr2.shift())
    console.log(mergedArr, arr1, arr2)
  }
  mergedArr.push(arr1.concat(arr2))
  return mergedArr.flat()
}

//sorting part
//break up the array into halves until you have arrays that are empty or have
//one element
//once you have smaller sorted arrays, merge those arrays with other sorted
//arrays until you are back at the full length of the array
//once the array has been merged back together, return the merged (and sorted)
//array
function mergeSort(arr){
  if (arr.length <= 1) return arr
  let left = arr.slice(0, Math.floor(arr.length/2))
  let right = arr.slice(Math.floor(arr.length/2))
  return merge(mergeSort(left), mergeSort(right))
}

//CS version slightly different
// function csMergeSort(arr){
//   if(arr.length <=1) return arr
//   let mid = Math.floor(arr.length/2)
//   let left = csMergeSort(arr.slice(0,mid))
//   let right = csMergeSort(arr.slice(mid))
//   return merge(left, right)
// }

let arrOne = [1, 2, 3, 4, 7, 9, 12, 24, 32]
let arrTwo = [0, 2, 3, 6, 6, 9, 11, 42, 53]
let rando = [3,6,23,7,45,23,6,8,5,63453,65,4,23,6,86,4,2,22,636,7,54]

// console.log(merge(arrOne, arrTwo))
// console.log(mergeSort(arrOne))
console.log(mergeSort(rando))