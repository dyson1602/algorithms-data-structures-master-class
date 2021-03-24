// Given a two-dimensional matrix of integers matrix, determine whether it's a 
// Toeplitz matrix. A Toeplitz is one where every diagonal descending from left to
// right has the same value.

const toeplitzMatrix = matrix => {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false
      }
    }
  }
  return true
}