//Write a funciton called reverse that accepts a string as an argument and
//returns a new string in reverse.

//Example:
// reverse("string") // "gnirts"
// reverse("hello") // "olleh"

//1. base case string is "" so return ""
//2. return the last letter of the string and then add the recursive last letter


function reverse(string){
  if (string.length === 0) return ""
  return string.slice(-1) + (reverse(string.slice(0, -1)))
}


console.log(reverse("string")) //
console.log(reverse("hello"))
console.log(reverse(""))
