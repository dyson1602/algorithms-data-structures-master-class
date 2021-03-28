// Given a singly linked list node, return its length. The linked list has fields 
// next and val.

const lengthOfALinkedList = node => {
  if (!node) return 0
  let count = 1, current = node
  while (current.next) {
    count++
    current = current.next
  }
  return count
}