//BIG O of Stacks

class Node {
  constructor(val){
    this.val = val
    this.next = next
  }
}

class Stack {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val){
    let newNode = new Node(val)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return this.size++
  }
  pop(){
    if(this.size = 0) return null
    let temp = this.first
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.val
  }
}

let stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)