// You are given a two-dimensional list of integers matrix containing 1s and 0s. 
// Return the number of elements in matrix such that:

// matrix[r][c] = 1
// matrix[r][j] = 0 for every j ≠ c and matrix[i][c] = 0 for every i ≠ r

const largestElementsInTheirRowAndCol = matrix => {
  let count = 0
  const rowLength = matrix[0].length

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < rowLength; j += 1) {
      if (matrix[i][j] === 1) {
        const rowFreq = {}
        matrix[i].forEach(num => {
          if (!rowFreq[num]) {
            rowFreq[num] = 1
          } else {
            rowFreq[num] += 1
          }
        })
        if (rowFreq[1] === 1) {
          const colFreq = {}
          matrix.forEach(row => {
            if (!colFreq[row[j]]) {
              colFreq[row[j]] = 1
            } else {
              colFreq[row[j]] += 1
            }
          })
          if (colFreq[1] === 1) {
            count += 1
          }
        }
      }
    }
  }

  return count
}