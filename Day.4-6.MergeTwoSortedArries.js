//merge two sorted arries

function mergeTwoSortedArrs(arr1, arr2) {
    var resArr = [];

    var changingArr1 = arr1;
    var changingArr2 = arr2;

    while (changingArr1.length>0&& changingArr2.length>0){
        if (changingArr1[0] <= changingArr2[0]) {
            var elementToBePushed = changingArr1.shift();

        } else {
             elementToBePushed = changingArr2.shift();
        }

        resArr.push(elementToBePushed);
    }
    if (changingArr1.length>0){
    	var remainingArr = changingArr1;
    }

    if (changingArr2.length>0){
    	 remainingArr = changingArr2;
    }

    resArr = resArr.concat(remainingArr);
    return resArr

}

mergeTwoSortedArrs([1, 2, 4, 5, 6, 7, 8, 9],[3, 5, 7, 29,100])
