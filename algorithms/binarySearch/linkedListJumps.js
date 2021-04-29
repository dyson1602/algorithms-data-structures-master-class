// You are given a singly linked list node containing positive integers. Return the 
// same linked list where every node's next points to the node val nodes ahead. If 
// there's no such node, next should point to null.

const linkedListJumps = node => {
  let currentNode = node, jumpFromNode = node
  let jumpVal = node.val, count = 0

  while (true) {
    if (!currentNode.next && count < jumpVal) {
      jumpFromNode.next = null
      break
    } else if (count < jumpVal) {
      currentNode = currentNode.next
      count += 1
    } else {
      jumpFromNode.next = currentNode
      jumpFromNode = currentNode
      jumpVal = currentNode.val
      count = 0
    }
  }
  return node
}