// take in an unsorted arr
// return a sorted arr
// sorts in place
function bubbleSort(arr) {
  if(!Array.isArray(arr)) return []

  const arrCopy = arr.slice()
  //sorts an element at a time
  let count = 0;

  while (count < arrCopy.length - 1) {
    arrCopy.forEach((ele, idx)=>{
      //exclude the last element
      //exclude the number of elements that have been sorted
      if(idx !== arrCopy.length - 1 - count) {
        if(ele > arrCopy[idx + 1]) {
          arrCopy[idx] = arrCopy[idx + 1]
          arrCopy[idx + 1] = ele
        }
      }
    })
    count++
  }

  console.log("arrCopy", arrCopy)

  return arrCopy
}

module.exports = bubbleSort;
