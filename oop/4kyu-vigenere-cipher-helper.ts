function VigenèreCipher(key: string, abc: string) {
  this.key = key;
  this.abc = abc;

  this.code = function (str: string, encode: boolean): string {
    let keyExtended = this.keyExtender(this.key, str.length);
    let indexesToShift: (number | string)[] = [];

    for (let i = 0; i < keyExtended.length; i++) {
      let keyIndex = this.abc.indexOf(keyExtended[i]);
      let strIndex = this.abc.indexOf(str[i]);

      if (strIndex < 0) indexesToShift.push(str[i]);
      else {
        if (encode) {
          indexesToShift.push(strIndex + keyIndex);
        } else {
          indexesToShift.push(strIndex - keyIndex);
        }
      }
    }

    return indexesToShift
      .map(index => {
        if (typeof index === 'string') return index;
        index >= this.abc.length ? (index -= this.abc.length) : index;
        index < 0 ? (index = this.abc.length + index) : index;
        return this.abc.charAt(index);
      })
      .join('');
  };

  this.encode = (str: string): string => this.code(str, true);

  this.decode = (str: string): string => this.code(str, false);

  this.keyExtender = function (str: string, length: number): string {
    let result = str;

    let timesToRepeat = Math.floor(length / str.length) - 1;

    for (let i = 0; i < timesToRepeat; i++) {
      result += str;
    }

    let lettersToAdd = length % str.length;
    let strRest = str.slice(0, lettersToAdd);

    result = (result + strRest).length > length ? strRest : result + strRest;

    return result;
  };
}

let abc = 'abcdefghijklmnopqrstuvwxyz';
let key = 'password';
// let key = 'pizza';
let c = new VigenèreCipher(key, abc);

console.log(c.encode('codewars')); // => 'rovwsoiv'
console.log(c.decode('rovwsoiv')); // => 'codewars'

console.log(c.encode('waffles')); // => 'laxxhsj'
console.log(c.decode('laxxhsj')); // => 'waffles'

console.log(c.encode('CODEWARS')); // => 'CODEWARS'
console.log(c.decode('CODEWARS')); // => 'CODEWARS'

// console.log(c.encode('asodavwt'));

//! or

function VigenèreCipher1(key, abc) {
  var self = this;
  var size = abc.length;

  this.transform = function (str, getIndex) {
    return str
      .split('')
      .map(function (ch, index) {
        return abc.indexOf(ch) >= 0 ? abc[getIndex(ch, index)] : ch;
      })
      .join('');
  };

  this.enocodeIndex = function (ch, index) {
    return (abc.indexOf(ch) + abc.indexOf(key.charAt(index % key.length)) + size) % size;
  };

  this.decodeIndex = function (ch, index) {
    return (abc.indexOf(ch) - abc.indexOf(key.charAt(index % key.length)) + size) % size;
  };

  this.encode = function (str) {
    return this.transform(str, this.enocodeIndex);
  };
  this.decode = function (str) {
    return this.transform(str, this.decodeIndex);
  };
}
