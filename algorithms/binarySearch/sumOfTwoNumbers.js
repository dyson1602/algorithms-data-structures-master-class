// Implement a data structure with the following methods:

// add(int val) adds the value val to the data structure
// find(int val) returns whether there are two elements whose sum equals to val
// Constraints

// n ≤ 10,000 where n is the number of times add will be called
// m ≤ 1,000 where m is the number of times find will be called

class TwoSum {
  constructor() {
    this.values = {}
  }

  add(val) {
    if (this.values[val]) this.values[val] += 1
    else this.values[val] = 1
  }

  find(val) {
    for (let key in this.values) {
      if ((val - key) in this.values && (val - key) != key) return true
      else if ((val - key) == key && this.values[key] > 1) return true
    }
    return false
  }
}