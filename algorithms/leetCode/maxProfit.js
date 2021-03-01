// You are given an array prices for which the ith element is the price of a given stock on day i.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

const maxProfit = prices => {
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    if(prices[i] > prices[i-1]){
        maxProfit += prices[i] - prices[i-1]
    }
  }
  return maxProfit
};

let p1 = [7, 1, 5, 3, 6, 4]
let p2 = [1, 2, 3, 4, 5]

console.log(maxProfit(p2))