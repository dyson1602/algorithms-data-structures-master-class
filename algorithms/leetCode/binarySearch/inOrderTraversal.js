// Given a binary tree root, return an inorder traversal of root as a list.

// Bonus: Can you do this iteratively?

const inOrderTraversal = root => {
  const traversal = []

  function traverseTree(node) {
    if (node.left) traverseTree(node.left)
    traversal.push(node.val)
    if (node.right) traverseTree(node.right)
  }

  if (!root) {
    return []
  }

  traverseTree(root)

  return traversal
}