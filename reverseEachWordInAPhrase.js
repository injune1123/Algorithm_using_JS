//From leetcode 
//https://leetcode.com/problems/two-sum/

// reverse each word in a phrase


// The most awesome way of slving this problem! In one line!!!
function reverseWordsInPhrase (str){
    return str.split(" ").reverse().join(" ").split('').reverse().join(" ");
    
}

reverseWordsInPhrase("I am a good girl");

// function reverseWordsInPhrase(sentence){
//     resSentence="";
//     var wordsArr = sentence.split(" ");
//     for (var i=0; i<wordsArr.length; i++){
//         resCurWord = ""
//         var curWord = wordsArr[i]
//         for (var j=curWord.length-1; j>=0; j--){
//             resCurWord+=curWord[j];
//         }
//         resSentence+=resCurWord+" "
//         console.log(resSentence)
//     }
//     return resSentence.substring(0,sentence.length)
// }




// function reverseWordsInPhrase(sentence){
//     var wordsArr = sentence.split(" ");
//     for (var i=0; i<wordsArr.length; i++){
//         wordsArr[i]=wordsArr[i].split("").reverse().join("");
//     }
//     return wordsArr.join(" ")
// }




// function reverseWordsInPhrase(sentence){
//     var wordsArr = sentence.split(" ");
//     for (var i=0; i<wordsArr.length; i++){
//         wordsArr[i]=wordsArr[i].split("").reverse().join("");
//     }
//     return wordsArr.join(" ")
// }

// reverseWordsInPhrase("I am a good girl")

