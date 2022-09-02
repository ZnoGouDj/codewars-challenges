function AtbashCipher(abc) {
  this.abc = abc;

  this.encode = function (str) {
    let result: string[] = [];
    for (let i = 0; i < str.length; i++) {
      let originalIndex = this.abc.indexOf(str[i]);
      if (originalIndex < 0) result.push(str[i]);
      else result.push(this.abc[this.abc.length - originalIndex - 1]);
    }
    return result.join('');
  };
  this.decode = function (str) {
    return this.encode(str);
  };
}

//!

function AtbashCipher1(abc) {
  this.encode = function (str) {
    return str
      .split('')
      .map(function (x) {
        var i = abc.indexOf(x);
        return i < 0 ? x : abc.charAt(abc.length - i - 1);
      })
      .join('');
  };
  this.decode = this.encode;
}

var abc = 'abcdefghijklmnopqrstuvwxyz';
var c = new AtbashCipher(abc);
console.log(c.encode('abc')); // => 'zyx'
console.log(c.encode('zyx')); // => 'abc'
console.log(c.decode('abc')); // => 'zyx'
console.log(c.decode('zyx')); // => 'abc'
