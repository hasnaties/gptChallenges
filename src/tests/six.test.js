const getFactorial = require('../lib/six');

test('should Calculate Factorial Correctly', () => {
  expect(getFactorial(5)).toBe(120);
});