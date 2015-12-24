//remove duplicates from an Array without using index of

// this method is using objects like dictionaries.
function removeArrDuplicates (arr){
    var checkDuplicateObj = {};
    var resArr = [];
    for(var i =0; i<arr.length;i++){
        var currEle =arr[i]
        if (!checkDuplicateObj[currEle]){
            resArr.push(currEle);
            checkDuplicateObj[currEle] = true;

        }

    }
return resArr; 
}




//O(n)-as if it's a set
// function removeDuplicates(arr) {
//     var obj ={};
//     var res =[];
//     for (var i=0; i< arr.length; i++){
//         obj[arr[i]]=arr[i]
//     }
//     console.log(obj)
//     for(var key in obj){
//         res.push(obj[key])
//     }
    
// return res
// }


// removeDuplicates([1,2,3,9,3,4,10])


// O(n^2)
// function removeDuplicates(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//     	    var isUnique = true;

//         for (var j = 0; j < arr.length; j++) {

//             if (newArr[j] == arr[i]) {
//                 isUnique = false;
//             }

//         }
//         if (isUnique) {
//             newArr.push(arr[i])

//         }

//     }
//     return newArr


// }
