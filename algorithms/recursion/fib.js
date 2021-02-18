//Write a recursive function called fib that accepts a number and returns the nth number in the 
//Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers, 1,1,2,3,5,8,...
//that starts with 1 and 1, and where ever number thereafter is the sum of the previous two numbers.

//Example
// fib(4) //3
// fib(10) //55
// fib(28) //317811
// fib(35) //9227465

// num      1 2 3 4 5 6 7 
// value    1 1 2 3 5 8 13

// num === 4  the value at num === 4 is the same as (num === 3 + num === 2)
// orrrr we can say num4 === num(4 - 2) + num(4 - 1) 

function fib(num){
  if (num <=2) return 1
  return fib(num - 2) + fib(num - 1)
}

//                   fib(5)
//        2            +             3       = 5
//      fib(3)         +           fib(4)
//   1    +   1             1        +       2
// fib(1) + fib(2)        fib(2)     +     fib(3)
//                                       1   +    1
//                                    fib(1) +  fib(2)

//           fib(3)

// fib(1)   fib(3-2) === 1  fib(3-1) === 1


console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))