// You are given a string s containing "1", "2", "3" and "?". Given that you can replace 
// any “?” with "1", "2" or "3", return the smallest number you can make as a string such 
// that no two adjacent digits are the same.

const smallestNoDupes = s => {
  let str = s.split("")
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      if (str[i - 1] !== "1" && str[i + 1] !== "1") str[i] = "1"
      else if (str[i - 1] !== "2" && str[i + 1] !== "2") str[i] = "2"
      else str[i] = "3"
    }
  }
  return str.join("")
}