//Write a function called maxSubArraySum which accepts an array of integers and number called
//n. The function should calculate the maximum sum of n consecutive elements in the array.

//naive solution with O(n^2) time 
// function maxSubArraySum(arr, num){
//   if (num > arr.length) return null;
//   let max = -Infinity
//   for (let i = 0; i < arr.length - num + 1; i++){
//     temp = 0
//     for (let j = 0; j < num; j++){
//       temp += arr[i+j]
//     }
//     if (temp > max){
//       max = temp
//     }
//   }
//   return max
// }

// console.log(maxSubArraySum([1,4,2,6,7,8,3,6,3,7,1,0],4)) //24

//refactored solution with O(n) time
function maxSubArraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubArraySum([1,4,2,6,7,8,3,6,3,7,1,0],4)) //24
