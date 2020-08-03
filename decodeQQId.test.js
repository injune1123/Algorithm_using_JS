const decodeQQId = require('./decodeQQId.js');


test(`decodeQQId`, () => {
  expect(decodeQQId('631758924')).toEqual('615947283');
  });
