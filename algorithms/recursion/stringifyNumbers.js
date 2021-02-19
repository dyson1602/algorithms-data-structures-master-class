//Write a function called stringifyNumbers that takes in an object and finds all
//of the values that are numbers and converts them to strings.

//1. stringify must happen in place, no new obj (this is wrong according to CS,
//      he doesn't want us to modify an existing object)
//1revised. create new object to be used in return
//2. for..in loop that tests for typeof === 'number'
//3. if number, stringify in place
//4. else if object and not array, set argument obj equal to recursive return 
//     of the obj[key] 5. return obj

function stringifyNumbers(obj) {
  let stringObj = {}
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      stringObj[key] = stringifyNumbers(obj[key])
    } else if (typeof obj[key] === 'number') {
      stringObj[key] = obj[key].toString()
    } else {
      stringObj[key] = obj[key]
    } 
  }
  return stringObj
}

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

let obj2 = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
}

console.log(stringifyNumbers(obj1))
