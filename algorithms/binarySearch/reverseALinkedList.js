// Given a singly linked list node, return its reverse.

// Bonus: Can you do this in \mathcal{O}(1)O(1) space?

const reverseALinkedList = node => {
  var previous = null,
    current = node,
    next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  node = previous;
  return node;
}