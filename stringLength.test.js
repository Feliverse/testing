const stringLength = require('./stringLength');

test('Returns the correct length of a string', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('throws an error if the string is too short', () => {
  expect(() => stringLength('')).toThrow('String length must be at least 1 character long.');
})

test('throws an error if the string is too long', () => {
  expect(() => stringLength('this is too long')).toThrow('String must not be longer than 10 characters.');
})