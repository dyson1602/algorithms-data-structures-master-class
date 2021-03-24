// You are given a string s of "a" and "b"s. "a"s can stay "a" or turn into "b", but "b"s can't change.

// Return the number of unique strings that can be made.

const uniqueABStrings = s => {
  let aCount = 0
  let arr = s.split("")
  aCount = arr.filter(letter => letter === "a").length
  return Math.pow(2, aCount)
}