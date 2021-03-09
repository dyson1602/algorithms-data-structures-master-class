// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.
// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

//create a loop that ends once all numbers have been visited
//thinking a recursive solution is going to be the best option?
//

const combinationSum2 = (candidates, target) => {
  let combos = []
  
  candidates.filter(num => num <= target)

  console.log(candidates)
  return combos
};

let candidates = [10,1,2,7,6,1,5], target = 8
combinationSum2(candidates,target)