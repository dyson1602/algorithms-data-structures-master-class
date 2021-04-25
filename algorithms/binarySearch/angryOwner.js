// You are given two lists of integers customers and mood, both of them the same 
// length, and an integer k. On each minute i, customers[i] number of people come 
// to the store and if mood[i] = 1, then the customers are happy whereas if 
// mood[i] = 0, then they are unhappy.

// Given that you can set a sublist of length k of mood to 1s, return the maximum 
// number of people you can make happy.

const angryOwner = (customers, mood, k) => {

  //define max and tempSum
  //set two pointers equal to 0 and k - 1
  let tempSum = 0, max
  let left = 0, right = k - 1

  //find current total of happy customers

  const initialHappyCount = customers.reduce((sum, num, index) => {
    if (mood[index] === 1) {
      sum += num
    }
    return sum
  }, 0)

  //define temp window sum from changes to be 0 to k index
  for (let i = 0; i < k; i += 1) {
    if (mood[i] === 0) {
      tempSum += customers[i]
    }
  }
  max = tempSum
  //build while loop where it continues until the right pointer === mood.length
  //add one to left and right
  //subtract customers left - 1(if 0 mood)
  //if moods === 0 add customers[idx] to tempSum
  //max = Math.max tempSum or max

  while (right < mood.length) {
    right += 1
    left += 1
    if (mood[left - 1] === 0) {
      tempSum -= customers[left - 1]
    }
    if (mood[right] === 0) {
      tempSum += customers[right]
    }
    max = Math.max(tempSum, max)
  }

  // return happyCount
  return initialHappyCount + max
}