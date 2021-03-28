// You are given two strings typed and target. You want to write target, but the 
// keyboard is stuck so some characters may be written 1 or more times. Return 
// whether it's possible that typed was meant to write target.

const stuckKeyboard = (typed, target) => {
  let typPtr = 0, tarPtr = 0
  while (typPtr <= typed.length) {
    if (typed[typPtr] !== target[tarPtr]) return false
    else if (typed[typPtr] === typed[typPtr + 1] && target[tarPtr] !== target[tarPtr + 1]) typPtr++
    else {
      typPtr++
      tarPtr++
    }
  }
  return true
}