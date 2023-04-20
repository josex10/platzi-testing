// matchers

test('test obj', () => {
  const data = { name: 'Nico' };
  data.lastname = 'Badilla';
  expect(data).toEqual({ name: 'Nico', lastname: 'Badilla' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('boolean', () => {
  expect(true).toEqual(true);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('Jose').toMatch(/ose/);
});

test('arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
