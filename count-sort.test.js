const countSort = require('./count-sort.js');

test('orders integers', () => {
  expect(countSort([5,3,5,2,8])).toEqual([2,3,5,5,8]);
  expect(countSort([])).toEqual([]);
  expect(countSort(null)).toEqual([]);
  expect(countSort(1234)).toEqual([]);
});


