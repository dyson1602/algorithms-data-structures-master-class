//nodes hold a piece of data (val) and a reference to the next node (next)

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let current = this.head
    this.head = current.next
    this.length--
    return current
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(ind) {
    if (ind >= this.length || ind < 0) return null
    let count = 0
    let current = this.head
    while (count != ind) {
      current = current.next
      count++
    }
    return current
  }
  set(ind, newVal) {
    let foundNode = this.get(ind)
    if (foundNode) {
      foundNode.val = newVal
      return true
    }
    return false
  }
  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false
    if (ind === this.length) return !!this.push(val) //coerced to boolean
    if (ind === 0) return !!this.unshift(val) //coerced to boolean

    let newNode = new Node(val)
    let prevNode = this.get(ind - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
    return true
  }
  remove(ind){
    if (ind < 0 || ind > this.length) return false
    if (ind === this.length - 1) return this.pop()
    if (ind === 0) return this.shift()

    let prevNode = this.get(ind -1)
    let removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--
    return removedNode
  }
  reverse(){
    this.tail = this.head
    let prev = this.tail
    let current = prev.next
    let next = current.next
    this.tail.next = null
    while (next){
      current.next = prev
      prev = current
      current = next
      next = current.next
    }
    this.head = current
    current.next = prev
    return this
  }
  //CS solution. Both work. His is slightly more elegant
  // reverse(){
  //   let node = this.head
  //   this.head = this.tail
  //   this.tail = node
  //   let next
  //   let prev = null
  //   for (let i = 0; i<this.length; i++){
  //     next = node.next
  //     node.next = prev
  //     prev = node
  //     node = next
  //   }
  //   return this
  // }
} //singlyLinkedList

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("Farewell")
list.unshift("Aloha")

console.log(list.get(3))
console.log(list.set(2, "!!!!!!"))
console.log(list.get(2))



// let list = new SinglyLinkedList()
// list.push("hello")


//this is a terrible way of building out a linked list
// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")