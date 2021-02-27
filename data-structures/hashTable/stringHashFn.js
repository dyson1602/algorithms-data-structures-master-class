//Python has a Dictionary or dict
//JS has Objects and Maps
//Jave, Go and Scala have Maps
//Ruby has... Hashes

//The following is how you would construct a hash table if it wasn't included
//This is literally reinventing the wheel.

//Hash functions are almost always a one-way function


//Problems with this hash: only hashes strings, not constant time, clustered data
function hash(key, arrayLen) {
  let total = 0
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}

//Slight improvement on performance and randomness

function hashTwo(key, arrayLen) {
  let total = 0
  let WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen
  }
  return total
}

console.log(hashTwo("maroon", 13))
console.log(hashTwo("black", 13))
console.log(hashTwo("red", 13))
console.log(hashTwo("cyan", 13))