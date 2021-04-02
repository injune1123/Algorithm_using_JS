const findFirstAndLastPositionOfElementInSortedArray = require('./findFirstAndLastPositionOfElementInSortedArray.js');

test(`findFirstAndLastPositionOfElementInSortedArray`, () => {
  expect(findFirstAndLastPositionOfElementInSortedArray([1,2,2,2,2,3], 2)).toEqual([1, 4]);
});