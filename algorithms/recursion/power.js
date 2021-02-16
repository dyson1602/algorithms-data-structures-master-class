//Write a function called power that accepts a base and an exponent. The function should reutnr
//the power of the base to the exponent. This function should mimic the functionality of Math.pow().
//Do no worry about negative bases and exponents.

//Example
//  power(2, 0) // 1
//  power(2, 2) // 4
//  power(2, 4) // 16

//helper recursion method
//1. base case if the exp === 1 return the base
//2. return that base * recursive call of (base, exp - 1)
//3. short circuit for 0 power

function power(base, exp){
  if (exp === 0) return 1
  if (exp === 1) return base
  return base * power(base, exp - 1)
}

console.log(power(2, 0))
console.log(power(2, 1))
console.log(power(2, 2))
console.log(power(2, 3))
console.log(power(2, 4))