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

function memoizedFibonacci(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n]
  let res = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo)
  memo[n] = res
  return res
}

//buttom-up approach. fixes the stack overflow problem that can occur with
//the memoized solution
//Time: O(n)
function tabulatedFibonacci(n) {
  if (n <= 2) return 1
  let fibNums = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }
  return fibNums[n]
}

console.log(memoizedFibonacci(6))
console.log(tabulatedFibonacci(6))