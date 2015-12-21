// write a function to swap two numbers, without using any temporarily varibale

function swap (a,b) {

	console.log(a);
	console.log(b);
    
//your code goes here

    a=a-b;
    b=a+b;
    a=b-a;
// your code ends    
	console.log(b);
	console.log(a);

}



function swap (a,b) {

	console.log("a="+a);
	console.log("b="+b);
    
    a=a.toString()+"-"+b.toString()
    b=+a.slice(a.indexOf("-")+1)
    a=+a.slice(0,a.indexOf("-"))

	console.log("b="+b);
	console.log("a="+a);

}




