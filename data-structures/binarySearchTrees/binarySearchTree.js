//Time: Average is O(log n) but can go up to O(n) if the tree is one-sided

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val)
    if (!this.root) this.root = newNode

    let current = this.root
    while (true) {
      if (val === current.val) return undefined
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      }
      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  search(val) {
    if (this.root === null) return false
    let current = this.root,
      found = false
    while (current && !found) {
      if (val < current.val) current = current.left
      else if (val > current.val) current = current.right
      else return true
    }
    return false
  }
  BFS() {
    let queue = [],
      visited = [],
      node = this.root
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      visited.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }
  DFSPreOrder() {
    let visited = []
    function traverse(node) {
      visited.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
  }
  DFSPostOrder() {
    let visited = []
    let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.val)
    }
    traverse(current)
    return visited
  }
  DFSInOrder() {
    let visited = []
    let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return visited
  }
}

let tree = new BinarySearchTree()
tree.root = new Node(50)
tree.insert(40)
tree.insert(30)
tree.insert(70)
tree.insert(60)
tree.insert(84)
tree.insert(12)
tree.insert(45)
tree.insert(98)

console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())

//Space complexity of a wide tree is large in BFS, less so in DFS
//Time complexity is O(n) since we visit every single node one time.

//DFS InOrder: used commonly with BSTs, because the data that is returned is
  //in order (just a side effect)
//DFS PreOrder: useful if you are trying to clone/flatten out the tree in to an
  //array and rebuild later (you immediately know what the root is)
//Can only have a BST with data that is comparable.