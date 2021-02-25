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
