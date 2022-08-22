function KeywordCipher(abc, keyword) {
  let encoded = Array.from(new Set((keyword + abc).split(''))).join('');

  this.encode = function (str) {
    return this.coder(str, true);
  };

  this.decode = function (str) {
    return this.coder(str, false);
  };

  this.coder = function (str, encode) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let idx = encode ? abc.indexOf(str[i]) : encoded.indexOf(str[i]);

      result += idx < 0 ? str[i] : encode ? encoded[idx] : abc[idx];
    }
    return result;
  };
}

//!

function KeywordCipher1(abc, keyword) {
  var key = (keyword + abc).split('').filter(function (l, i, a) {
    return a.indexOf(l) == i;
  });
  function code(k1, k2, s) {
    return s
      .split('')
      .map(function (l) {
        return k1[k2.indexOf(l)] || l;
      })
      .join('');
  }
  this.encode = code.bind(this, key, abc);
  this.decode = code.bind(this, abc, key);
}

var abc = 'abcdefghijklmnopqrstuvwxyz';
var key = 'keyword';
var cipher = new KeywordCipher(abc, key);

console.log(cipher.encode('abc')); // => 'key'
console.log(cipher.encode('xyz')); // => 'vxz'
console.log(cipher.decode('key')); // => 'abc'
console.log(cipher.decode('vxz')); // => 'xyz'
