// Feature branch update
const USERS = {
  admin: '9999',
  locked_user: '123'
};

const LOCKED_USERS = ['locked_user'];

function login(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') return false;
  if (username.trim() === '' || password === '') return false;
  if (LOCKED_USERS.includes(username)) return false;
  return Object.prototype.hasOwnProperty.call(USERS, username) &&
         USERS[username] === password;
}

module.exports = { login };
