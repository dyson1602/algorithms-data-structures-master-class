//Write a function called minSubArrayLen which accepts two parameters: an array of positive
//integers and a positive integer. The function should return a minimal length of a
//contiguous sub array of which the sum is greater than or equal to the integer passed
//to the function. If there isn't one, return 0 instead.

//Time: O(n), Space: O(1)

function minSubArrayLen(array, target){
  let leading = 0
  let trailing = 0
  let minLength = Infinity
  let tempSum = 0

  while (trailing < array.length){
    if (tempSum < target && leading < array.length){
      tempSum += array[leading]
      leading++
    } else if (tempSum >= target) {
      minLength = Math.min(minLength, (leading - trailing))
      tempSum -= array[trailing]
      trailing++
    } else {
      break
    }
  }
return minLength === Infinity ? 0 : minLength
}
  
console.log(minSubArrayLen([1,2,3,4,5,6,6,4,3], 11))
console.log(minSubArrayLen([1,2,3,4,5,6,6,4,3], 3))
console.log(minSubArrayLen([1,2,3,4,5,6,6,4,3], 41))