function binarySearch (nums, target)  {
    if(!nums || !Array.isArray(nums) || !nums.length ) return -1;

    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        const mid = Math.floor(start - (start - end) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid;    
        } else {
            start = mid
        }
    }

    if(nums[start] === target) return start
    if(nums[end] === target) return end

    return -1;
}

module.exports = binarySearch
