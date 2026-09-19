const { login } = require('./auth');

test('Smoke: admin/123 đăng nhập thành công', () => {
  expect(login('admin', '123')).toBe(true);
});
