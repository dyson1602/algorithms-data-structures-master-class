//Write a function called collectStrings that accepts and object and returns an
//array of all the values in the object that have a typeof 'string'

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

//1. define empty array variable
//2. build for...in loop that checks typeof value in key
//3. if value is typeof 'string', push to new array
//4. if it isn't a string, set new array equal to itself concatinated with 
//     the recursive calls return of the new array
//5. return the new array

function collectStrings(obj) {
  let stringArray = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringArray.push(obj[key])
    } else if (typeof obj[key] === 'object') {
      stringArray = stringArray.concat(collectStrings(obj[key]))
    }
  }
  return stringArray
}

console.log(collectStrings(obj1))