//Write a funciton called reverse that accepts a string as an argument and
//returns a new string in reverse.

//Example:
// reverse("string") // "gnirts"
// reverse("hello") // "olleh"


//1. base case string is "" so return ""
//2. define empty temp string
//3. 
//4. 


function reverse(string){
  if (string.length === 1) return string[0]
  console.log(string.pop())
  // return string[-1].concat(reverse(string.slice(0, -1)))
}


console.log(reverse("string")) //
console.log(reverse("hello"))
// console.log(reverse(""))
