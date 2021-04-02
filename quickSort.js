// find a pivot (the left most element)
// two sentinels (left, right)
// sentinels start to move toward each other
// left sentinel will look for number that is larger than pivot
// right sentinel will look for number is smaller than pivot
// right sentinel moves first towards the left, if sh/e meet a number, stop
// left sentinel moves now towards the right, if sh/e meet a number, stop
// if left sentinel finds a number and right sentinel also finds one
// swap
// when the left sentinel meets the right sentinel at indexX
// swap the pivot with the number at IndexX
// divide the problem into smaller ones: a left chunk and right chunk
// repeat the above action for the left half
// repeat the above action for the right half

function helper(arr, left, right) {
  if (left >= right) {
    return;
  }

  const pivot = arr[left]
  const leftBoundary = left //pivot
  const rightBoundary = right

  // right sentinel moves first towards the left
  // if sh/e meet a number that is smaller than pivot, stop
  while (left < right) {
    while(left < right && arr[right] >= pivot ) {
      right--
    }
    // stops if left = right or arrCopy(right) <= pivot
    while(left < right &&  arr[left] <= pivot) {
      left++
    }

    if (left < right) {
      swapEleInArr(arr, left, right)
    }
  }

  swapEleInArr(arr, leftBoundary, right)

  helper(arr, leftBoundary, left - 1)
  helper(arr,left + 1, rightBoundary)
}

function quickSort (arr) {
  if(!Array.isArray(arr)) return []

  const arrCopy = arr.slice()

  let leftIdx = 0;
  let rightIdx = arrCopy.length -1;

  helper(arrCopy, leftIdx, rightIdx)

  return arrCopy
}

//It's not a pure function
function swapEleInArr(arr, idxA, idxB){
  const temp = arr[idxA]
  arr[idxA] = arr[idxB]
  arr[idxB] = temp
}

module.exports = quickSort;
