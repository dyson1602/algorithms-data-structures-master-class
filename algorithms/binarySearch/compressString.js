// Given a string lowercase alphabet s, eliminate consecutive duplicate characters 
// from the string and return it.

// That is, if a list contains repeated characters, they should be replaced with a 
// single copy of the character. The order of the elements should not be changed.

const compressString = s => {
  let string = "", currentChar = null

  s.split('').forEach(char => {
    if (!currentChar) {
      currentChar = char
    } else if (char !== currentChar) {
      currentChar = char
    } else {
      return
    }
    string = string + char
  })
  return string
}