// check whether a string is a palindrome
// without using reverse
//isPalindrome("aabaa") true


//aabbaa 2.5
//aabaa



// better solution
function isPalindrome(str){
        var length = str.length
		for (var i=0; i<= length/2;i++){
            if(str[i]!==str[length-i-1]){
                return false
            }
		}
	return true
}





// function isPalindrome(str){

// 		var splitSpace = str.length/2
// 		var leftStr = str.slice(0,Math.floor(splitSpace));
// 		var rightStr = str.ceil(Math.round(splitSpace));
	
// 		resLefStr = "";
// 		for (var i=leftStr.length-1; i>= 0;i--){
// 			resLefStr+=leftStr[i]

// 		}
// 	if (resLefStr===rightStr){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
	

// }
