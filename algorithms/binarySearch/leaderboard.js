// You are given a list of integers nums, representing the number of chess matches 
// each person has won. Return a relative ranking (0-indexed) of each person. If 
// two players have won the same amount, their ranking should be the same.

const leaderboard = nums => {
  const set = new Set([...nums].sort((a, b) => b - a))
  const rankedOrder = Array.from(set)
  const rank = {}
  rankedOrder.forEach((num, idx) => {
    rank[num] = idx
  })
  return nums.map(num => rank[num])
}