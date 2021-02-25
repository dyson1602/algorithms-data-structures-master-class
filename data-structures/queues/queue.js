//Time: O(1) for insertion and removal. Searching and accessing shouldn't use a
//queue. It is basicaly a special type of linked list.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return this.size++
  }
  dequeue() {
    if (!this.first) return null
    let temp = this.first
    if (this.first === this.first) this.last = null
    this.first = this.first.next
    this.size--
    return temp.val
  }
}

let queue = new Queue()

queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
queue.enqueue(500)
queue.enqueue(600)