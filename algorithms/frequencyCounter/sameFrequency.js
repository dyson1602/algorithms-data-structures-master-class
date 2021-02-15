//Write a function called sameFrequency. Given two positive integers, find out if the two
//numbers have the same frequency of digits. Your solution MUST have the following complexities:

//Time: O(n)

//Sample input
// sameFrequency(182,182) true
// sameFrequency(34,14) false
// sameFrequency(3589578,5879385) true
// sameFrequency(22,222) false

function sameFrequency(num1, num2){
  let sNum1 = num1.toString()
  let sNum2 = num2.toString()

  if(sNum1.length !== sNum2.length){
    return false
  }

  let counter = {}

  for (let i = 0; i < sNum1.length; i++){
    let num = sNum1[i]
    counter[num] = (counter[num] || 0) + 1
  }
  for(let j = 0; j < sNum2.length; j++){
    let num = sNum2[j]
    if (!counter[num]){
      return false
    } else {
      counter[num] -= 1
    }
  }
  return true
}

console.log(sameFrequency(182,182)) //true
console.log(sameFrequency(182,1822)) //false
console.log(sameFrequency(15832,13852)) //true
console.log(sameFrequency(182123,123182)) //true
console.log(sameFrequency(182123,943182)) //false