// Q1  a function to reverse a string

//reverse('you are a nice dude'); 
//"edud ecin a era uoy"



function reverseString (str){
	if(typeof(str)!=="string"){
		return "It should take a string"
	}
	else{
	res=""
		for (var i=str.length-1; i>=0;i--){
			res+=str[i]
		}
	return res
}
}

// recursion 
// function reverseString (str){

//     if (str.length===0){
//         return str
//     }
//     return reverseString(str.substring(1))+str.charAt(0)
    
// }

// Q2  add the function to the prototype of string

// String.prototype.reverseString = function(){
     
//         res = ""
//         for (var i = this.length - 1; i >= 0; i--) {
//             res += this[i]
//         }
//         return res
    
// }


// "".reverseString()
