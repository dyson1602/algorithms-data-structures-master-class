//Time: O(2^n) this is much worse than n^2 but slightly less than n! for 
//the recursive solution without memoization

//solution with memoization
//Time: O(n)
// function dynamicFibonacci(n, memo = []) {
//   console.log("memo: ", memo)
//   if (memo[n] !== undefined) return memo[n]
//   if (n <= 2) return 1
//   let res = dynamicFibonacci(n - 1, memo) + dynamicFibonacci(n - 2, memo)
//   memo[n] = res
//   return res
// }

function dynamicFibonacci(n, memo = [undefined,1,1]) {
  if (memo[n] !== undefined) return memo[n]
  let res = dynamicFibonacci(n - 1, memo) + dynamicFibonacci(n - 2, memo)
  memo[n] = res
  return res
}

console.log(dynamicFibonacci(6))