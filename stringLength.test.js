const stringLength = require('./stringLength');

test('Returns the correct length of a string', () => {
  expect(stringLength('Hello, World!')).toBe(13);
});