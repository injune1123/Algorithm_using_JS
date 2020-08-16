// Given an array of integers, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2


// O(n)
var twoSum = function(nums, target) {
  var map={};
  for (var i=0; i<nums.length; i++){
        if  (!map.hasOwnProperty(target-nums[i])){
            map[nums[i]]=i;
        }
        else {
            return [map[target-nums[i]]+1,i+1]
        }

      
  }
  
};


// O(n^2)

// var twoSum = function(nums, target) {
//     var indexArr =[];
//     for (var i=0; i<nums.length; i++){
//         for (var j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 indexArr.push(i+1);
//                 indexArr.push(j+1);
//             }
            
            
//         }
        
//     }
//     return indexArr;
    
// };