//8[2] 
//6[2,3]
//9[3]

// n is a postive interger
// n, n


function isPrime(Arr,n){
    for(var j=0; j<Arr.length; j++){
        if (n%Arr[j]===0){
            return false
        }
        
    }
    return true
}



function findPrimeFactors (n){
	
	var primeFactorArr = [];
	for (var i=2; i<=n; i++){
		if (n%i===0&&isPrime(primeFactorArr,i)){
			primeFactorArr.push(i);
		}
	}

if (primeFactorArr.length>1){
    primeFactorArr.pop();
    
}
return primeFactorArr;

}


findPrimeFactors(9)

