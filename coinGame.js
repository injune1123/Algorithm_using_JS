//Challenge:
// Here is the rule for a coin game:
// Two people paly this game together 
// Everyone can pick 1~3 coins at a time
// who grabs the last coins is winner
// Suppose the players are rational
// write a function to determine if you can win when seeing a fixed amount of coins 




function canWil (numCoin){
	if numCoin%4 === 0{
		return "false"
	}
	else{
		return "true"
	}

}


//1 
//2 
//3 
// get 4 for the other player
// 8
// 12 

// 1,2,3
// 1,2,3

// 1:-win
// 2:-win
// 3:-win
// 4:-1,lose
// 4:-2,lose
// 4:-2,lose
// 5:-1(-1)-3 win
// 5:-1(-2)-2
// 5:-1(-3)-1
// 6:-2 win
// 7: -3 win
// 8: lose



// +4 win
// 6-2+4 win
// 7-3+4 win





