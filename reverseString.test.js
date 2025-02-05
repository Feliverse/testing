const reverseString = require('./reverseString');

test('reverse a string correctly', () => {
  expect(reverseString('zorra')).toBe('arroz');
});
