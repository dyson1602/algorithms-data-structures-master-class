//write a function that checks to see if all the values in the noteArray are
//able to be found in the magArray; count is important
//Time: O(n)

function checkMagazine(magArray, noteArray){
  for(let i = 0; i < noteArray.length; i++){
      let idx = magArray.indexOf(noteArray[i])
      if(idx || idx === 0){
        magArray.splice(idx,1)
      } else {
        return "No"
      } 
    }
  return "Yes"
}

function hashCheck(magArray, noteArray){
  let obj = {}

  for(let i = 0; i < noteArray.length; i++){
    if(!obj[noteArray[i]]) obj[noteArray[i]] = 1
    else obj[noteArray[i]]++
  }
  for(let i = 0; i < magArray.length; i++){
    if(obj[magArray[i]]) obj[magArray[i]]--
  }
  
  return Object.values(obj).includes(val => val > 0) ? "Yes" : "No"
}

let mag = ["give","me","one","grand","today","night"]

let note = ["give","one","grand","today"]