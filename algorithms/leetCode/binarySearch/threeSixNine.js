// Given an integer n, return a list with each number from 1 to n, except if it's a multiple of 3 or has a 3, 6, or 9 in the number, it should be the string "clap".

// Note: return the number as a string.

const threeSixNine = n => {
  let arr = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) arr.push("clap")
    else if (i.toString().split("").includes("3")) arr.push("clap")
    else if (i.toString().split("").includes("6")) arr.push("clap")
    else if (i.toString().split("").includes("9")) arr.push("clap")
    else arr.push(i.toString())
  }
  return arr
}