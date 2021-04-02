function searchInRotatedSortedArray (nums, target) {
    if(!nums || !Array.isArray(nums) || !nums.length ) return -1;

    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        const mid = Math.floor(start - (start - end) / 2);
        if(nums[mid] === target) {
            return mid;
        } 

        
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid
            } else {
                start = mid
            }
        } else {
            if(target <= nums[end] && target > nums[mid]) {
                start = mid
            } else {
                end = mid
            }
        }
    }

    if(nums[start] === target) return start
    if(nums[end] === target) return end

    return -1;

}


module.exports = searchInRotatedSortedArray;