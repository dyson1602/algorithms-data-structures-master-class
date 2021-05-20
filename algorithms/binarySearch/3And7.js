// Given a positive integer n, determine whether you can make n by summing up some 
// non-negative multiple of 3 and some non-negative multiple of 7.

const threeAndSeven = (n) => {
    let solution = false

    function divider (num) {
        if(num % 3 === 0 || num % 7 === 0 || num % 10 === 0){
            solution = true
            return
        } else if(num < 10){
            return
        } else {
            divider(num - 10)
        }
    }

    divider(n)
    
    return solution
}