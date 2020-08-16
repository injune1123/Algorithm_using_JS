// find the nth fibonacci number




function fibNumber (n){

	if (n>0 && n%1 === 0){


	var n1 = 1
	var n2 = 1
	
	for(var i=2; i<n; i++){

			var curNum = n1+n2;
			n1=n2;
			n2=curNum;

	}
	
	return n2
}

else{

	alert ("Please pass in an integer which is greater than 0");
}


}


// recursion concise 2
// function fibNum (n){
//     if (n==1||n==2){
//         return 1}
    
//     return  fibNum(n-1)+fibNum(n-2)
    
// }

//recursion version 1
// function fibNum (n){
//     if (n==1||n==2){
//         res = 1;
//     }
//     else{
//     res = fibNum(n-1)+fibNum(n-2)
//     }
//     return res
    
// }

// function fibNumber (n){


// 	var n1 = 1
// 	var n2 = 1
	
// 	for(var i=2; i<n; i++){

// 			var curNum = n1+n2;
// 			n1=n2;
// 			n2=curNum;

// 	}
	
// 	return n2


// }




// greater!

// function fibNumber (n){


// 	var n1 = 1
// 	var n2 = 1
	
// 	for(var i=2; i<n; i++){

// 			var curNum = n1+n2;
// 			n1=n2;
// 			n2=curNum;

// 	}
	
// 	return n2


// }



// great!

// function fibNumber (n){
// 	var fibList = [1,1]
// 	if (n<=2){

// 		return 1
// 	}
// 	if(n>2){

// 		for(var i=2; i<n; i++){

// 			var curNum = fibList[0]+fibList[1];
// 			fibList[0]=fibList[1];
// 			fibList[1]=curNum;

// 		}
	
// 	return fibList[1]
// 	}


// }




// 1st solution 
// drawback: takes up too many memory

// function fibNumber (n){
// 	var fibList = [1,1]
// 	if (n<=2){

// 		return 1
// 	}
// 	if(n>2){

// 		for(var i=2; i<n; i++){

// 			var curNum = fibList[i-2]+fibList[i-1];
// 			fibList.push(curNum);
// 		}
	
// 	return fibList[fibList.length-1]
// 	}


// }