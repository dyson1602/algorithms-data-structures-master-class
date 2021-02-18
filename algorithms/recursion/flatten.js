//Write  recursive function called flatten that accepts an array of arrays and
//returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

//1. base case: array completely flat
//2. return recursive call of array with argument array.flat()


//this solution doesn't pass CS tests, probably because it doesn't do it 
//recursively, but I don't see why this doesn't work. 
// function flatten1(array){
//   return array.flat(Infinity)
// }


//this is CS solution for recursively solving the problem. This passes his test
//but the output is still exactly the same as the shorter solution above. Need
//to research why this is the case. Still, simple concept here though.

function flatten(array){
  let newArray = []

  for(let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
      newArray = newArray.concat(flatten(array[i]))
    } else {
      newArray.push(array[i])
    }
  }
return newArray
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
console.log(flatten1([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten1([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten1([[1],[2],[3]])) // [1,2,3]
console.log(flatten1([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]