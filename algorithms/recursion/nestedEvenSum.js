//Write a recursive function called nestedEvenSum. Return the sum of all even
//numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

//define evenSum
//iterate through object using for...in loop?
//we will need a conditional that determines if the value of a key is a number
//  using typeof
//determine if number is even, if True, add to even sum
//if it is an object, the return will recursively call the function again added
//  to the current evenSum

function nestedEvenSum(obj) {
  let evenSum = 0
  for (let key in obj) {
    if ((typeof obj[key] === "number" && obj[key] % 2 === 0)) {
      evenSum += obj[key]
    } else if (typeof obj[key] === "object") {
      evenSum += nestedEvenSum(obj[key])
    }
  }
  return evenSum
}

console.log(nestedEvenSum(obj1)) //6
console.log(nestedEvenSum(obj2)) //10