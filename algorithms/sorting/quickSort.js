//quick sort

//choose an index that acts as the pivot

//pivot helper or partition written first
//given an array, this helper function should designate an element as the pivot
//it should then rearrange elements in the array so that all values less than
//the pivot are moved to the right of the pivot
//the order of the elements on either side of the pivot doesn't matter
//the helper should do this IN PLACE, that is, it should not create a new array
//it returns the index of the pivot
//the runtime of quicksort depends in part how one selects the pivot
//ideally the pivot should be chosely so that it is roughly the median value in 
//the dataset you're sorting

//pivot accepts three arguments, and array, a start and an end index (these can
//be default to 0 and the array length respectively)
//grab the pivot from the start of the array
//store the current pivot index in a variable (this will keep track of where the
//pivot should end up
//loop thru the array from start to end
//  if the pivot is greater than the current element, increment the pivot ind
//  variable then swap the current element with the element at the pivot ind
//swap the starting element (the pivot) with the pivot ind
//return the pivot ind
function swap(arr, ind1, ind2) {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start]
  let swapInd = 0
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapInd++
      swap(arr, swapInd, i)
    }
  }
  swap(arr, start, swapInd)
  return swapInd
}

//quicksort function
function quickSort(arr) {


}

let array = [34, 3, 5, 7, 3, 45, 23, 8, 65, 49, 12, 0]

console.log(pivot(array))