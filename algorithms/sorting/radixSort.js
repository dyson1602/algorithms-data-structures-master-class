//radix

//Time: Best- O(nk), Avg- O(nk), Worst O(nk)
//Space: O(n+k)
//n = length of array
//k = number of digits (avg)

//special sorting algorithm that works on lists of numbers
//never makes comparisons on two elements
//it exploits the fact that information about the size of a number is encoded
//in the number of digits
//more digits means a bigger number
let test = [34, 3, 123415, 7, 3, 45, 223, 8, 63325, 49, 212, 0]

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
  let max = 0
  for (let val of arr) {
    max = Math.max(max, digitCount(val))
  }
  return max
}

//define a function that accepts a list of numbers
//figure out how many digits the largest number has
//loop from k = 0 to the largest number of digits
//for each iteration 
//  create buckets for each digit
//  place each number in the corresponding bucket based on its kth digit
//replace our existing array with the values in each bucket starting with 0 and
//  going up to 9
//return list at end

function radixSort(arr) {
  let times = mostDigits(arr)
  for (let i = 0; i < times; i++) {
    let buckets = Array.from({length: 10}, () => [])
    for (let j = 0; j < arr.length; j++) {
      let val = getDigit(arr[j], i)
      buckets[val].push(arr[j])
    }
    arr = buckets.flat()
    //CS way uses the below method. i like .flat() a little more
    //arr = [].concat(...buckets)
  }
  return arr
}

console.log(radixSort(test))