var CaesarCipher = function (shift) {
  this.shift = shift;
  this.alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
};

CaesarCipher.prototype.encode = function (code) {
  return this.cod(code);
};

CaesarCipher.prototype.decode = function (code) {
  return this.cod(code, false);
};

CaesarCipher.prototype.cod = function (code, encode = true) {
  let result: string[] = [];
  for (let i = 0; i < code.length; i++) {
    if (this.alphabet.includes(code[i].toLowerCase())) {
      let newIndex = this.alphabet.indexOf(code[i].toLowerCase());

      if (encode) {
        newIndex += this.shift;
        if (newIndex >= this.alphabet.length) newIndex -= this.alphabet.length;
      } else {
        newIndex -= this.shift;
        if (newIndex < 0) newIndex += this.alphabet.length;
      }

      result.push(this.alphabet[newIndex].toUpperCase());
    } else {
      result.push(code[i]);
    }
  }
  return result.join('');
};

//! or

var CaesarCipher1 = function (shift) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.encode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26];
    });
  };
  this.decode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26];
    });
  };
};

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
console.log(c.encode('Codewars')); // returns 'HTIJBFWX'
console.log(c.decode('BFKKQJX')); // returns 'WAFFLES'
