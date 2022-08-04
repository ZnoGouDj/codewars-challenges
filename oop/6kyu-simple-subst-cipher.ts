function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    let result: string[] = [];
    for (let i = 0; i < str.length; i++) {
      let currentIndex = abc1.indexOf(str[i]);
      if (currentIndex < 0) {
        result.push(str[i]);
      } else {
        result.push(abc2[currentIndex]);
      }
    }
    return result.join('');
  };
  this.decode = function (str) {
    let result: string[] = [];
    for (let i = 0; i < str.length; i++) {
      let currentIndex = abc2.indexOf(str[i]);
      if (currentIndex < 0) {
        result.push(str[i]);
      } else {
        result.push(abc1[currentIndex]);
      }
    }
    return result.join('');
  };
}

//!

function SubstitutionCipher1(f, t) {
  this.encode = function (s) {
    return s
      .split('')
      .map(function (_) {
        return t[f.indexOf(_)] || _;
      })
      .join('');
  };
  this.decode = function (s) {
    return s
      .split('')
      .map(function (_) {
        return f[t.indexOf(_)] || _;
      })
      .join('');
  };
}

var abc1 = 'abcdefghijklmnopqrstuvwxyz';
var abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode('abc')); // => "eta"
console.log(sub.encode('xyz')); // => "qxz"
console.log(sub.encode('aeiou')); // => "eirfg"

console.log(sub.decode('eta')); // => "abc"
console.log(sub.decode('qxz')); // => "xyz"
console.log(sub.decode('eirfg')); // => "aeiou"
