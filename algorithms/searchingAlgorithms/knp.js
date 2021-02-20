//KNP is Knuth-Morris-Pratt algorithm which searches for the occurrence of a 
//word. 

//define count
//build the preprocess list of the substring to reference
//

function kmp(string, sub) {
  let lps = computeLsp(sub)
  let i = 0
  let j = 0

  while (i < string.length && j < sub.length){
    if (string[i] === sub[j]){
      i++
      j++
    } else if ( j!== 0){
      j = lps[j-1]
    } else {
      i++
    }
  }

  return j === sub.length ? true : false
}

function computeLsp(sub){
  let lps = [0]

  let i = 1
  let j = 0

  //Time: O(n), Space: O(n)
  while (i <= sub.length) {
    // console.log("lps: ", lps, "j: ", j)
    if (sub[i] === sub[j]) {
      lps.push(j + 1)
      i++
      j++
    } else if (sub[i] !== sub[j] && j === 0) {
      lps.push(0)
      i++
    } else {
      j = lps[j - 1]
      lps.push(j)
      i++
    }
  }
  return lps
}

let str1 = "abcxabcdacvabcdabcdabcy"
let str2 = "abxabcabcaby"
let str3 = "this is a sun submarine"
let sub1 = "abcdabcy"
let sub2 = "aabaabaaa"
let sub3 = "abcaby"
let sub4 = "sub"

console.log(kmp(str1, sub1)) //true
console.log(kmp(str1, sub2)) //false
console.log(kmp(str2, sub3)) //true
console.log(kmp(str3, sub4)) //true