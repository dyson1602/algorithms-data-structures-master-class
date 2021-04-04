// Given a single linked list node, representing a binary number with most 
// significant digits first, return it as an integer.

const linkedListToInteger = node => {
  let str = "", currentNode = node
  str += currentNode.val
  while (currentNode.next) {
    str += currentNode.next.val
    currentNode = currentNode.next
  }
  return parseInt(str, 2)
}