const { login } = require('./auth');

describe('Regression: login()', () => {
  test('đúng admin/123 trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('sai mật khẩu trả về false', () => {
    expect(login('admin', 'wrong')).toBe(false);
  });

  test('username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('username chỉ có khoảng trắng trả về false', () => {
    expect(login('   ', '123')).toBe(false);
  });

  test('password rỗng trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('mật khẩu chứa ký tự đặc biệt trả về false', () => {
    expect(login('admin', '!@#$%^&*()')).toBe(false);
    expect(login('admin', "' OR '1'='1")).toBe(false);
  });

  test('tài khoản bị khóa không đăng nhập được dù đúng mật khẩu', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('username phân biệt hoa thường', () => {
    expect(login('ADMIN', '123')).toBe(false);
  });

  test('username không tồn tại trả về false', () => {
    expect(login('guest', '123')).toBe(false);
  });

  test('đầu vào null/undefined trả về false', () => {
    expect(login(null, null)).toBe(false);
    expect(login(undefined, undefined)).toBe(false);
  });
});
