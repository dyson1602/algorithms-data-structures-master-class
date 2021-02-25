class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (this.length === 0) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unShift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(ind) {
    if (ind < 0 || ind >= this.length) return null
    let count, current
    if (ind <= this.length / 2) {
      count = 0
      current = this.head
      while (count != ind) {
        current = current.next
        count++
      }
    } else if (ind > this.length / 2) {
      count = this.length - 1
      current = this.tail
      while (count != ind) {
        current = current.prev
        count--
      }
    }
    return current
  }
  set(ind, val){
    let node = this.get(ind)
    if(node !== null){
      node.val = val
      return true
    }
    return false
  }
}

let list = new DoublyLinkedList

list.push(100)
list.push(200)
list.push(300)
list.push(400)
list.push(500)
list.push(600)

console.log(list.get(2))