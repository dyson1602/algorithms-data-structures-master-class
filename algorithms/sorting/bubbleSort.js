//Largest value bubbles to the top



//bubblesort
//Time: Best-case O(n), Worst-case O(n^2)
//Space Complexity: O(1)

function bubbleSort(array) {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }
  let noSwaps
  for (let i = 0; i < array.length; i++) {
    noSwaps = true
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return array
}

let array = [2, 6, 8, 3, 6, 43, 8, 56, 23, 65, 853, 25, 21]

console.log(bubbleSort(array))