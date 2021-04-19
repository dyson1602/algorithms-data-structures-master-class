// You are given a singly linked list head as well as integers pos and val. Insert 
// a new node with value val before index pos of head.

// Constraints

// 1 ≤ n ≤ 100,000 where n is the number of nodes in head
// 0 ≤ pos ≤ n


/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */

const insertIntoLinkedList = (head, pos, val) => {
  let currentPos = 0, currentNode = head, prevNode

  while (currentPos < pos) {
    prevNode = currentNode
    currentNode = currentNode.next
    currentPos += 1
  }

  if (pos > 0) {
    prevNode.next = new LLNode(val, currentNode)
  } else {
    head = new LLNode(val, currentNode)
  }

  return head
}