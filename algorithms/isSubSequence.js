//Write a function called isSubsequence which takes in two strings and checks whether the
//characters in the first string form a subsequence of the characters in the second string. In other 
//words, the function should check whtether the characters in the first string appear somewhere in
//the second string without their order changing.

//Time: O(n + m), Space: O(1)

//Examples
//  isSubsequence('hello', 'hello world'); //true
//  isSubsequence('sing', 'sting'); //true
//  isSubsequence('abc', 'abracadabra'); //true
//  isSubsequence('abc', 'acb'); false


//1. set up short circuit for situation where sub is longer than string
//2. define sub pointer and sequence pointer
//3. set pointers equal to first char of string and compare. if value isn't the same,
//    move sequence pointer to the right by 1 until it matches.
//4. on a match, move sub pointer +1 and move sequence pointer +1
//5. continue until sub pointer is equal to sub length or sequence pointer reaches the end
//6. if sub pointer is equal to sub length, return true
//7. if sequence pointer === sequence length, break and return false.

function isSubsequence(sub, sequence){
  if (sub.length > sequence.length) return false

  let subP = 0
  let seqP = 0

  while (seqP < sequence.length){
    if(sub[subP] === sequence[seqP]){
      subP++
      seqP++
      if (subP === sub.length) return true
    } else {
      seqP++
    }
  }
  return false
}

console.log(isSubsequence('his', 'his')) //true
console.log(isSubsequence('his', 'chris')) //true
console.log(isSubsequence('his', 'shi')) //false
console.log(isSubsequence('his', 'hi')) //false