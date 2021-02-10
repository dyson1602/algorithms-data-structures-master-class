//Impliment a function called areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are duplicates among the arguments passed in. You can solve this using the
//frequency counter pattern OR the multiple pointers pattern.

//ex: areThereDuplicates(1,2,3) //false
//    areThereDuplicates(1,2,2) //true
//    areThereDuplicates('a','b','c','a')

//restrictions: Time: O(n), Space: O(n).
//bonus: Time: O(log(n)), Space: O(1)


// by using the spread operator you can name all the arguments something, but aren't explicitly calling
// for one argument when invoking the function.

//this is the bonus solution with the faster time and space complexity
function areThereDuplicates(...args) {
  console.log(args)
  args.sort((a, b) => a - b)
  console.log(args)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

console.log(areThereDuplicates(1,3,6,4,8,9,0,2,6))