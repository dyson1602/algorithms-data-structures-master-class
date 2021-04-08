// You are given integers n, e, o, t. You have n dollars in principal that you 
// invested in the stock market. Given the stock market alternates between first 
// returning e and then o percent interest per year, return how many years it would 
// take to reach at leastt dollars.

const robinhood = (n, e, o, t) => {
  let yearCount = 0
  while (n < t) {
    if (yearCount % 2 === 0) {
      n += n * (e / 100)
      yearCount += 1
    } else {
      n += n * (o / 100)
      yearCount += 1
    }
  }
  return yearCount
}