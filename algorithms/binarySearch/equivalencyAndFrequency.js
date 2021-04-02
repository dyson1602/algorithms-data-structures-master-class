// Given a list of integers nums, return whether there's an integer whose frequency 
// in the list is same as its value.

const equivalencyAndFrequency = nums => {
  const freq = {}
  let result = false
  nums.forEach(num => {
    if (!freq[num]) freq[num] = 1
    else freq[num]++
  })
  Object.entries(freq).forEach(numCount => {
    if (numCount[0] == numCount[1]) result = true
  })
  return result
}
