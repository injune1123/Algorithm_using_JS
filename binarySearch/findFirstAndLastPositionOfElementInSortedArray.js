
function findFirstAndLst (nums, target) {
    let res = [-1, -1];
    if(!nums || !Array.isArray(nums) || !nums.length) {
        return res;
    }

    let start = 0;
    let end = nums.length - 1;
    // find start
    while (start + 1 < end ) {
        const mid = Math.floor( start - (start - end) / 2);
        if (nums[mid] >= target ) {
            end = mid
        } else {
            start = mid
        }
    }

    if ( nums[start] === target ) {
        res[0] = start 
    } else if ( nums[end] === target) {
        res[0] = end
    }

    start = 0;
    end = nums.length - 1;
    // find end
    while (start + 1 < end ) {
        const mid = Math.floor( start - (start - end) / 2);
        if (nums[mid] > target ) {
            end = mid
        } else {
            start = mid
        }
    }

    if ( nums[end] === target ) {
        res[1] = end 
    } else if ( nums[start] === target) {
        res[1] = start
    }

    return res;
}

module.exports = findFirstAndLst
