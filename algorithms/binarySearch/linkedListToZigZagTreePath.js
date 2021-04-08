// Given a singly linked list node, convert it to a binary tree path using these 
// rules:

// The head of the linked list is the root.
// Each subsequent node is the left child of the parent if its value is smaller, 
// otherwise it's the right child.

const linkedListToZigZagTreePath = node => {
  if (!node) return null
  const tree = new Tree(node.val)

  let currentListNode = node, currentTreeNode = tree

  while (currentListNode.next) {
    if (currentListNode.next.val < currentListNode.val) {
      currentTreeNode.left = new Tree(currentListNode.next.val)
      currentListNode = currentListNode.next
      currentTreeNode = currentTreeNode.left
    } else {
      currentTreeNode.right = new Tree(currentListNode.next.val)
      currentListNode = currentListNode.next
      currentTreeNode = currentTreeNode.right
    }
  }
  return tree

}