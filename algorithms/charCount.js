//write a function which takes in a string and returns counts of each character in the string

// First Iteration of Solution
// function charCount(str){
//   let results = {}
//   for (let i = 0; i < str.length; i++){
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)){
//       if (results[char] > 0){
//         results[char]++;
//       } else {
//         results[char] = 1;
//       }
//     }
//   }
//   return results
// }

// console.log(charCount("hi my name is chris! omg!!!!"))


// Refactored Solution that runs faster and separates functionality
function charCount(str) {
  let results = {}
  for (let char of str) {
    if (isAlphaNumeric(char)){
      char = char.toLowerCase()
      results[char] = ++results[char] || 1
    }
  }
  return results
}

function isAlphaNumeric(char){
  let code = char.charCodeAt(0)
  if (!(code > 47 && code < 58) && //numerica 0-9
      !(code > 64 && code < 91) && // upper alpha A-Z
      !(code > 96 && code < 123)) { // lower alpha a-z
        return false
      }
  return true
}

console.log(charCount("hi my name is chris! omg!!!!"))
