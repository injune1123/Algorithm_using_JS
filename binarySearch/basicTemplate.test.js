const binarySearch = require('./basicTemplate.js');

test(`binarySearch`, () => {
  expect(binarySearch([1,2,3], 2)).toEqual(1);
  });