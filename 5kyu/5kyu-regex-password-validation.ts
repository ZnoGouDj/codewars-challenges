// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// Test.expect(validate('djI38D55'), 'djI38D55 - Expected true');
// Test.expect(!validate('a2.d412'), 'a2.d412 - Expected false');
// Test.expect(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
// Test.expect(!validate('!fdjn345'), '!fdjn345 - Expected false');
// Test.expect(!validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
// Test.expect(!validate('123'), '123 - Expected false');
// Test.expect(!validate('abc'), 'abc - Expected false');
// Test.expect(validate('Password123'), 'Password123 - Expected true');

function validate(password: string): boolean {
  if (password.length < 6) {
    return false;
  }
  if (!/^[a-z0-9]+$/i.test(password)) {
    return false;
  }
  let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/g;
  return re.test(password);
}

//top

function validate1(password: string): boolean {
  return (
    /^[A-Za-z0-9]{6,}$/.test(password) && /[A-Z]+/.test(password) && /[a-z]+/.test(password) && /[0-9]+/.test(password)
  );
}
