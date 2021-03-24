// You are given a two-dimensional list of integers reviews and a positive integer 
// threshold. Each element reviews[i] contains [x, y] meaning product i had x number 
// of 5-star reviews and a total of y reviews. All reviews are for one store.

// Return the minimum number of additional 5-star reviews we need such that the 
// percentage of 5-star reviews in the store is at least threshold. You can assume 
// that it's possible to reach threshold% of 5-star reviews.

const fiveStarPercentage = (reviews, threshold) => {

  let fivers = 0
  let total = 0

  for (let i = 0; i < reviews.length; i++) {
    fivers += reviews[i][0]
    total += reviews[i][1]
  }

  let percent = fivers / total * 100

  let more = 0

  while (percent < threshold) {
    fivers += 1
    total += 1
    more += 1
    percent = fivers / total * 100
  }

  return more
}