// // check whether a number is a prime number

//correct answer : less effective, O(n)=n, faster

function isPriNum (num){
    if (num%1 !== 0 | num ===1){
        return false;
    }
    
    if(num === 2){
        return true
    }
    if (num%2 === 0){
        return false
    }

    else{
        for (var a = num-2; a >= 2; a = a-2){
         if (num%a === 0){
             return false
         }   
        }
    return true
    }
}

console.log(isPriNum(1));
console.log(isPriNum(2));
console.log(isPriNum(3));
console.log(isPriNum(4));
console.log(isPriNum(5));
console.log(isPriNum(6));
console.log(isPriNum(53));



// one of the best ways

// a^1/2


// If a number is not a prime, it will be the result of x*y, x<a^1/2, and y>a^1/2




//correct answer : less effective, O(n)=n
// second try by Jun



// function isPriNum (num){
//     if (num%1 !== 0 | num ===1){
//         return false;
//     }
    
//     // if(num ===2){
//     //     return true
//     // }
    
    
//     else{
//         for (var a= num-1; a >= 2; a--){
//          if (num%a ===0){
//              return false
//          }   
//         }
//     return true
//     }
// }
// // console.log(isPriNum(1.5));
// console.log(isPriNum(1));
// console.log(isPriNum(2));
// console.log(isPriNum(3));
// console.log(isPriNum(4));
// console.log(isPriNum(5));
// console.log(isPriNum(6));
// console.log(isPriNum(13));













//correct answer : very ineffective, O(n)=n^2

// first try by Jun


// function isPriNum (num){
//     if (num%1 !== 0 | num ===1){
//         return false;
//     }
//     else{
//         if (num === 2){
//             return true
//         }
        
//         else{
//             var priNumArr = [2];
//             for (var i = 3; i<= num; i++ ){
//                 for (var j=0; j<priNumArr.length; j++)
//                 // console.log(i, priNumArr[j])
//                 if (i%priNumArr[j] !== 0){
//                     // console.log(priNumArr,i)
//                     priNumArr.push(i);
//                     // console.log(priNumArr,i)

//                 }

//                 for (var  a=0; a<priNumArr.length; a++ ){
//                     if (num%priNumArr[a] ===0){
//                         return false
//                     }
//                 }
//                 return true
//             }
//         }
        
//     }
// }

// // console.log(isPriNum(1.5));
// // console.log(isPriNum(1));
// // console.log(isPriNum(2));
// // console.log(isPriNum(3));
// // console.log(isPriNum(4));
// // console.log(isPriNum(5));
// // console.log(isPriNum(6));
// console.log(isPriNum(9));


