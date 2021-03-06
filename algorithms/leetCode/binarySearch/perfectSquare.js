// Given an integer n, return whether n = k * k for some integer k.

// This should be done without using built-in square root function.

const perfectSquare = n => {
  // let num = Math.sqrt(n)
  // return Math.floor(num) === num ? true : false
  for (let i = 0; (i * i) <= n; i++) {
    if (i * i === n) return true
  }
  return false
}