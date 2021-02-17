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
  if (string.length === 0) return ""
  return string.slice(-1) + (reverse(string.slice(0, -1)))
}


console.log(reverse("string")) //
console.log(reverse("hello"))
console.log(reverse(""))
