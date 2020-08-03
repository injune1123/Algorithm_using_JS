//A QQid is a string of numbers
//This challenge is to decode a QQid
//You are given a encoded QQid
//You will get the correct QQId by following the steps below
//1. Delete the first number, move the 2nd number to the end of the QQid
//2. Delete the 3rd number, move the 4th number to the end of the QQid
//3. Delete the 5th number, move the 6th number to the end of the QQid
//...
//keep doing so until there is no number left
//concat all the deleted numbers in deletion order
//the concated string is the decoded id

function decodeQQId (encodedQQId) {
  if (typeof (encodedQQId) !== 'string') {
    return ''
  }
  let decodedQQId = '';
  let start = 0;
  let end = encodedQQId.length;

  while (start < end) {
    if (start % 2 === 0) {
      decodedQQId += encodedQQId.charAt(start)
      start++
    } else {
      encodedQQId += encodedQQId.charAt(start)
      start++
      end++
    }
  }

  return decodedQQId
}

module.exports = decodeQQId
