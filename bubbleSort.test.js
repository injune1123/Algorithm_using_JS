const bubbleSort = require('./bubbleSort.js');

test('orders integers', () => {
  expect(bubbleSort([5,3,5,2,8])).toEqual([2,3,5,5,8]);
  expect(bubbleSort([])).toEqual([]);
  expect(bubbleSort(null)).toEqual([]);
  expect(bubbleSort(1234)).toEqual([]);
});

