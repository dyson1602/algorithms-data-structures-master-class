// You are given an integer n representing n full beer bottles. Given that you can 
// exchange 3 empty beer bottles for 1 full beer bottle, return the number of beer 
// bottles you can drink.

const beerBottles = n => {
  let count = 0, extraBottles = 0
  function returnBottles(bottles) {
    count += bottles
    if (bottles > 0) {
      bottles += extraBottles
      extraBottles = bottles % 3
      returnBottles(Math.floor(bottles / 3))
    }
  }
  returnBottles(n)
  return count
}