function KamaSutraCipher(key) {
  this.keys = key;

  this.encode = function (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let letterHasBeenAdded = false;
      for (let j = 0; j < this.keys.length; j++) {
        let index = this.keys[j].indexOf(str[i]);
        if (index > -1) {
          result += this.keys[j].filter((el) => el !== this.keys[j][index]);
          letterHasBeenAdded = true;
        }
      }
      if (!letterHasBeenAdded) {
        result += str[i];
      }
    }
    return result;
  };
  this.decode = this.encode;
}

function KamaSutraCipher1(key) {
  var dict = key.reduce(function (dict, pair) {
    dict[pair[0]] = pair[1];
    dict[pair[1]] = pair[0];
    return dict;
  }, {});

  this.encode = this.decode = function (str) {
    return str.replace(/./g, function (c) {
      return dict[c] || c;
    });
  };
}

var key = [
  ['d', 'p'],
  ['n', 'o'],
  ['a', 'w'],
  ['f', 'c'],
  ['h', 's'],
  ['l', 'v'],
  ['m', 'j'],
  ['x', 'b'],
  ['e', 'z'],
  ['r', 'i'],
  ['k', 'y'],
  ['u', 'q'],
  ['t', 'g'],
];

var c = new KamaSutraCipher(key);
console.log(c.encode('mutt')); // 'jqgg'
console.log(c.encode('panda')); // 'dwopw'
