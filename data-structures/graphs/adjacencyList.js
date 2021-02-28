//undirected, unweighted graph with adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2)
    }
    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push(v1)
    }
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        let adjacentVertex = this.adjacencyList[vertex].pop()
        this.removeEdge(vertex, adjacentVertex)
      }
      delete this.adjacencyList[vertex]
    }
  }
  dfsRecursive(start) {
    const results = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      results.push(vertex)
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }

    dfs(start)
    return results
  }
  dfsIterative(start) {
    const stack = [start]
    const visited = {}
    const results = []
    let currentVertex

    visited[start] = true
    while (stack.length) {
      currentVertex = stack.pop()
      results.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return results
  }
  //Imported stack, but something is wrong with the stack. Must check the code.
  // dfsIterative(start) {
  //   const stack = new Stack()
  //   stack.push(start)

  //   const visited = {}
  //   const results = []
  //   let currentVertex

  //   visited[start] = true
  //   while (stack.size) {
  //     console.log(stack.size)
  //     currentVertex = stack.pop()
  //     results.push(currentVertex)

  //     this.adjacencyList[currentVertex].forEach(neighbor => {
  //       if(!visited[neighbor]){
  //         visited[neighbor] = true
  //         stack.push(neighbor)
  //       }
  //     })
  //   }

  //   return results
  // }
}

let g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.dfsIterative("A"))
console.log(g.dfsRecursive("A"))

