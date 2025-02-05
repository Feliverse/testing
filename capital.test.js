const capitalize = require('./capital');

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
