// You are given a two-dimensional matrix of unique strings representing city blocks,
// and a list of strings blocks to visit. Given that you are sitting at block matrix[0][0], 
// return the total Manhattan distance required to visit every block in order.

const cityBlocks = (matrix, blocks) => {
  const manhattanDistances = {}

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      manhattanDistances[matrix[i][j]] = [i, j]
    }
  }

  return blocks.map((block, idx) => {
    if (idx === 0) return manhattanDistances[block][0] + manhattanDistances[block][1]
    else return Math.abs(
      manhattanDistances[blocks[idx - 1]][0] - manhattanDistances[block][0]
    ) +
      Math.abs(
        manhattanDistances[blocks[idx - 1]][1] - manhattanDistances[block][1]
      )
  }).reduce((sum, val) => sum + val)
}