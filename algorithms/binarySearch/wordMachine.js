// You are given a list of strings ops where each element is either:

// A non-negative integer that should be pushed into a stack
// "POP" meaning pop the top element in the stack
// "DUP" meaning duplicate the top element in the stack
// "+" meaning pop the top two and push the sum
// "-" meaning pop the top two and push top - second
// Return the top element in the stack after applying all operations. 
// If there are any invalid operations, return -1.


const wordMachine = ops => {
  if (ops.length === 0) return -1
  const stack = []
  let invalid = false

  ops.forEach(op => {
    switch (op) {
      case "DUP":
        if (stack.length === 0) {
          invalid = true
          break
        }
        else {
          stack.push(stack[stack.length - 1])
          break
        }
      case "POP":
        if (stack.length === 0) {
          invalid = true
          break
        }
        else {
          stack.pop()
          break
        }
      case "+":
        if (stack.length < 2) {
          invalid = true
          break
        }
        else {
          stack.push(stack.pop() + stack.pop())
          break
        }
      case "-":
        if (stack.length < 2) {
          invalid = true
          break
        }
        else {
          stack.push(stack.pop() - stack.pop())
          break
        }
      default:
        stack.push(parseInt(op))
    }
  })
  return !invalid ? stack.pop() : -1
}