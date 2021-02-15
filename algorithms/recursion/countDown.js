//recursive solution

function countDown(num){
  //this conditional is the base case
  if(num<=0){
    console.log("All done!")
    return
  }
  console.log(num)
  num--
  countDown(num)
}

//iterative solution

function iCountDown(num){
  for(let i = num; i > 0; i--){
    console.log(i)
  }
  console.log("All Done!")
}

countDown(10)
iCountDown(10)