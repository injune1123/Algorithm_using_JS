const countSort = require('./count-sort.js');
const bubbleSort = require('./bubbleSort.js');

const  runTest = (sortfuncs) => {
  sortfuncs.forEach(
    (sortfunc) => {
      test(`${sortfunc.name}countSort: orders integers`, () => {
        expect(sortfunc([5,3,5,2,8])).toEqual([2,3,5,5,8]);
        expect(sortfunc([])).toEqual([]);
        expect(sortfunc(null)).toEqual([]);
        expect(sortfunc(1234)).toEqual([]);
      });
    }
  )
}

runTest([countSort, bubbleSort])

