//insertion sort

//Builds up the sort by gradually creating a larger left portion which is always
//sorted.

//Can be done without a swap function where I just create a current value in 
//the outer loop and use that to save the value at array[i] like the solution
//he gave below here.

// function insertionSort(array){
//   for(let i = 1; i< array.length; i++){
//     let currentVal = array[i]
//     for(let j = i -1; j >= 0 && array[j] > currentVal; j--){
//       array[j+1] = array[j]
//     }
//     array[j+1] = currentVal
//   }
//   return array
// }

//Time Complexity: O(n^2) is worst-case, but if it is almost all sorted
// best-case is closer to O(n)
//Space Complexity: O(1)

//Works well if data is coming in live and you need to sort it on the fly since
//the left side of the array stays sorted

function insertionSort(array) {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1)
      }
      if (array[j] > array[j - 1]) break
    }
  }
  return array
}

let array = [2, 33, 6, 8, 6, 43, 8, 1, 56, 23, 65, 853, 25, 21]

console.log(insertionSort(array))