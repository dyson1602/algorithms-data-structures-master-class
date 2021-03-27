// You are given an integer n, the number of people looking to find a seat, and a 
// list of integers seats where a 1 represents an already occupied seat and 0 
// represents empty space.

// Given that no two people can sit next to each other, return whether all n people 
// can find a seat.

const seatArrangement = (n, seats) => {
  let len = 0
  let arr = seats.join('').split('1')
  arr[0] = '0' + arr[0]
  arr[arr.length - 1] += '0'
  for (let i = 0; i < arr.length; i++) {
    len = arr[i].length
    if (len >= 3) {
      if (len % 2 === 0) {
        n -= (len - 2) / 2
      } else n -= (len - len % 2) / 2
    }
  }
  return n <= 0

}