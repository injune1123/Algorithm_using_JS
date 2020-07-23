// 202. Happy Number
// Easy

// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var res = []
    return helper(n, res)
};

function sumSquaresOfDigits (n) {
    const digitsArr = n.toString().split("") 
    let sum = 0;
    digitsArr.forEach((d)=>{
        sum += 1*d*d
    })
    return sum
}

function helper (n, res) {
    const sum = sumSquaresOfDigits(n)
    if(sum == 1) return true
    if(res.indexOf(sum) > -1) return false
    res.push(sum)
    return helper(sum, res)
}