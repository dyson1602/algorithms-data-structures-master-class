class TrieNode {
  constructor(val) {
    this.val = val
    this.isWord = false
    this.children = {}
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("")
  }
  insert(word) {
    if (!word) return undefined
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if(!node.children.hasOwnProperty(char)){
        node.children[char] = new TrieNode(char)
      }
      node = node.children[char]
      if(i === word.length - 1) node.isWord = true
    }
  }
}