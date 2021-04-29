// Given a list of integers prices representing the stock prices of a company in 
// chronological order, return the maximum profit you could have made from buying 
// and selling that stock once.

// You must buy before you can sell it.

// Note: You are not required to buy or sell the stock.

const wolfOfWallStreet = prices => {
  let buyPointer = 0, sellPointer = 1
  let maxProfit = 0

  while (buyPointer < prices.length) {
    if (prices[sellPointer] > prices[buyPointer]) {
      maxProfit = Math.max(maxProfit, prices[sellPointer] - prices[buyPointer])
      sellPointer += 1
    } else {
      buyPointer = sellPointer
      sellPointer += 1
    }
  }
  return maxProfit
}