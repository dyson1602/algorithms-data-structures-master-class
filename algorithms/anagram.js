//Given two strings, write a function to determine if the second string is an 
//anagram of the first. An anagram is a word, phrase, or name formed by rearranging 
//the letters of another, such as cinema, formed from iceman.

//this solution operates at O(n) time

// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length){
//     return false
//   }

//   let strCount1 = {}
//   let strCount2 = {}

//   for (let letter of str1){
//     strCount1[letter] = (strCount1[letter] || 0) + 1
//   }
//   for (let letter of str2){
//     strCount2[letter] = (strCount2[letter] || 0) + 1
//   }

//   for (let key in strCount1){
//     if (!(key in strCount2)){
//       return false
//     }
//     if(strCount1[key] !== strCount2[key]){
//       return false
//     }
//   }
//   return true
// }

// slightly more optimal solution
// tried using for.. of and it didn't work with the strings. more testing needed

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  let lookup = {}

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    console.log(letter)
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

const str1 = "rabbit"
const str2 = "batrib"
const str3 = "bratta"

console.log(checkAnagram(str1, str2)) //should give true
console.log(checkAnagram(str1, str3)) //should give false