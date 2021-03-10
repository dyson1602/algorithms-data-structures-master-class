// Given a non-negative integer n, find a number r such that r * r = n and round down to the nearest integer.

// Can you implement this without using the built-in square root?

const guessTheRoot = n => {
  let r = 0
  while (true) {
    if (r * r === n) return r
    else if (r * r > n) return r - 1
    r++
  }
}



// sqrt(n)   ?==    log(n)
// n^(1/2)  ?==    log(n)
// log(n^(1/2)) ?== log(log(n))
// (1/2)log(n) ?== log(log(n))
// log(n)  ?==   log(log(n))