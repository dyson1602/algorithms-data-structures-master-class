//Time: O(n), Space: O(1)

function singleNumber(num){
  return num.reduce((prev, curr) => prev ^ curr)
}

let array = [5,4,5,8,7,4,8]

// 5 => 1 0 1
// 4 => 1 0 0
// p    0 0 1
// 5    1 0 1
// p    1 0 0
// 8  1 0 0 0
// p  1 1 0 0
// 7  0 1 1 1
// p  1 0 1 1
// 4  0 1 0 0
// p  1 1 1 1
// 8  1 0 0 0
// p  0 1 1 1 => 7     

// 5  1 0 1
// 5  1 0 1
// ^  0 0 0