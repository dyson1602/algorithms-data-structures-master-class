//Write a function called naiveSearch that takes in a string and a sub string.
//Determine how many times the sub string appears in the larger string.

//Pseudo

//1. loop over the longer string
//2. loop over the shorter string
//3. if the characters don't match break out of the inner loop
//4. if the characters do match, keep going
//5. if you complete the inner loop and find a match, increase the counter by 1.
//6. return the count

function naiveSearch(string, sub){
  let count = 0

  for (let i = 0; i < string.length - sub.length; i++){
    for (let j = 0; j < sub.length; j++){
      if (sub[j] !== string[i+j]) break
      if (j === sub.length - 1 ){
        count++
      }
    }
  }
  return count
}

console.log(naiveSearch("this is a sub string submarine", "sub"))