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
//it doesn't pass the check on the site though
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

//
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

//one linear solution
function areThereDuplicates(){
  return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates(1,3,6,4,8,9,0,2,6))
console.log(areThereDuplicates(1,3,6,4,8))
console.log(areThereDuplicates(1,3,6,22,5,43,4,8))
