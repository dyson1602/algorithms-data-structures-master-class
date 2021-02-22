//selection sort

function selectionSort(array) {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }
  let min
  for (let i = 0; i < array.length; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j
    }
    if (array[min] < array[i]) swap(array, i, min)
  }
  return array
}

let array = [2, 6, 8, 3, 6, 43, 8, 56, 23, 65, 853, 25, 21]

console.log(selectionSort(array))