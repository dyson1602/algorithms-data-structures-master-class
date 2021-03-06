//Insert/remove Time: O(log n) due to only making one comparison on each level
//max heap or min heap will always fill out each row as it is built
//Search Time: O(n), binary heaps not really meant for searching

class MaxBinaryHeap {
  constructor() {
    this.values = [] 
  }
  insert(val) {
    this.values.push(val)
    this.bubbleUp()
    return this
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if(this.values.length > 0){
      this.values[0] = end
      this.heapifyDown()
    }
    return max
  }
  heapifyDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ){
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
console.log(heap.extractMax())