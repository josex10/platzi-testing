const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test('multiply 2 * 3 should be 6', () => {
  const result = multiply(2, 3);
  expect(result).toBe(6);
});

test('divide 10 / 5 should be 2', () => {
  const result = divide(10, 5);
  expect(result).toBe(2);
});

test('dividde with zero', () => {
  const result = divide(0, 10);
  expect(result).toBeNull();
});
