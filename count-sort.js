// take in an unsorted arr
// return a sorted arr
function countSort(arr) {
  if(!Array.isArray(arr)) return []
  const counts = []
  const res = []
  // the index of counts is the value of the element to be sorted
  arr.forEach((intEle)=>{
    counts[intEle] = counts[intEle] ? counts[intEle]+1 : 1
  })

  counts.forEach((intEle, idx)=>{
    while(intEle !== undefined && intEle>0  ) {
      res.push(idx)
      intEle--
    }
  })

  return res;
}
module.exports = countSort;
