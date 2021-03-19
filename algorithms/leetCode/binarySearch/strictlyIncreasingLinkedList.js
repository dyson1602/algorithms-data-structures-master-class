// Given the head of a singly linked list head, return whether the values of the 
// nodes are sorted in a strictly increasing order.

const strictlyIncLinkedList = head => {
  let current = head
  while (current.next) {
    if (current.next.val > current.val) current = current.next
    else return false
  }
  return true
}