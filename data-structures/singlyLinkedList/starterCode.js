//nodes hold a piece of data (val) and a reference to the next node (next)

class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val){
    let newNode = new Node(val)
    if (this.head === null){
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  } 
  pop(){
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next){
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0){
      this.head = null
      this.tail = null
    }
    return current
  }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("Farewell")

console.log(list)
console.log(list.pop())
console.log(list)

// let list = new SinglyLinkedList()
// list.push("hello")


//this is a terrible way of building out a linked list
// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")