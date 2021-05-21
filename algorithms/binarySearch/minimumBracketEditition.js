// Given a string s containing brackets ( and ), return the minimum number of 
// brackets that can be inserted so that the brackets are balanced.

const minimumBracketEdition = s => {
  const stack = []

  s.split('').forEach(char => {
    let last = stack.length - 1
    if (last < 0) {
      stack.push(char)
    } else if (stack[last] === "(" && char === ")") {
      stack.pop()
    } else {
      stack.push(char)
    }
  })

  return stack.length
}