// write a function to find the Greatest Common Divisor


function findGCD (a,b){

	for (var i=Math.max(a,b);i>0;i--){
		if (a%i===0&&b%i===0){
			return i
		}

	}
}

// Euclidean algorithm
//辗转相除法