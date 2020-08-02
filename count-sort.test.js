const countSort = require('./count-sort.js');

test('orders integers', () => {
  expect(countSort([5,3,5,2,8])).toEqual([2,3,5,5,8]);
});
