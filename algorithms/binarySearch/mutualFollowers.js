// You are given a two-dimensional list of integers relations. Each element 
// relations[i] contains [a, b] meaning that person a is following person b on Twitter.

// Return the list of people who follow someone that follows them back, sorted in 
// ascending order.

const mutualFollowers = relations => {
  const set = [], visited = new Set()
  let a, b
  for (let i = 0; i < relations.length; i++) {
    a = relations[i][0], b = relations[i][1]
    for (let j = 0; j < relations.length; j++) {
      console.log("i", i, "j", j, "set", set, "visited", visited)
      if (i !== j && relations[j].includes(a, b) && !visited.has(i)) {
        set.push(a, b)
        visited.add(i)
        visited.add(j)
      }
    }
  }
  return set
}