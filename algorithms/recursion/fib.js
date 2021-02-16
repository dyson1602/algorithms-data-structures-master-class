//Write a recursive function called fib that accepts a number and returns the nth number in the 
//Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers, 1,1,2,3,5,8,...
//that starts with 1 and 1, and where ever number thereafter is the sum of the previous two numbers.

//Example
// fib(4) //3
// fib(10) //55
// fib(28) //317811
// fib(35) //9227465

//1. set total = 1
//set helper function with base case of num === 1 or 2 to return 1
//

function fib(num){
  if (num <= 2) return 1
  return fib(num-1) + fib(num-2)
}

console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))