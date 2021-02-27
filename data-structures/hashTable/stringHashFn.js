//Python has a Dictionary or dict
//JS has Objects and Maps
//Jave, Go and Scala have Maps
//Ruby has... Hashes

//The following is how you would construct a hash table if it wasn't included
//This is literally reinventing the wheel.

//Hash functions are almost always a one-way function


//Problems with this hash: only hashes strings, not constant time, clustered data
function hash(key, arrayLen){
  let total = 0
  for (let char of key){
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}

console.log(hash("maroon",10))