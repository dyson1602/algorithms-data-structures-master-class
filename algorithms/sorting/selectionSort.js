//selection sort

//Time: O(n^2)
//Selection sort is good if you want to minimize the amount of swaps that take
//place. Otherwise, it is not very good.
//Space Complexity: O(1)

function selectionSort(array) {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j
    }
    if (i !== min) swap(array, i, min)
  }
  return array
}

let array = [2, 6, 8, 3, 6, 43, 8, 56, 23, 65, 853, 25, 21]

console.log(selectionSort(array))