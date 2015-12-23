// write a function to find all the prime factors of a number
// e.g
//8[2] 
//6[2,3]
//9[3]

// n is a postive interger
// n, n



// O(n)
// function primeFactors(n){
//     var divisor=2;
//     var result=[];
//     while(n>2){
//         if(n%divisor===0){
//             if(result.indexOf(divisor)==-1){
//             result.push(divisor)
//             }
//             n=n/divisor
//         }
//         else{
//             divisor++
//         }
//     }
//     return result
// }



//O(n^2)
// function isNotPrime(Arr,n){
//     for(var j=0; j<Arr.length; j++){
//         if (n%Arr[j]===0){
//             return true
//         }
        
//     }
//     return false
// }



// function findPrimeFactors (n){
	
// 	var primeFactorArr = [];
// 	for (var i=2; i<=n; i++){
// 		if (n%i===0&&!isNotPrime(primeFactorArr,i)){
// 			primeFactorArr.push(i);
// 		}
// 	}


// return primeFactorArr;

// }


// findPrimeFactors(9)

