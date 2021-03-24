// Given an integer n, return the maximum number you can make by inserting 5 
// anywhere in the number.


const maxNumByInsertingFive = n => {
  let max = -Infinity
  let nArr = n.toString().split("").map(char => parseInt(char))

  if (n < 0) nArr.shift()
  let tempArr = [], newNum

  for (let i = 0; i <= nArr.length; i++) {
    tempArr = [...nArr]
    tempArr.splice(i, 0, 5)
    newNum = parseInt(tempArr.map(num => num.toString()).join(""))
    if (n < 0) newNum = -newNum
    max = Math.max(max, newNum)
  }
  return max
}