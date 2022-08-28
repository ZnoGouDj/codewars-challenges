//? UNSOLVED

function VigenèreAutokeyCipher(key, abc) {
  this.key = key;
  this.abc = abc;

  this.code = function (str: string, encode: boolean): string {
    let keyExtended = this.keyExtender(this.key, str);
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

  this.encode = str => this.code(str, true);

  this.decode = str => this.code(str, false);

  this.keyExtender = function (key, str) {
    let result = key;

    let lengthDifference = str.length - key.length;

    if (lengthDifference <= 0) return result.slice(0, str.length);

    let stringToAdd = str.slice(0, lengthDifference);

    return result + stringToAdd;
  };
}

var keyy = 'password';
var abcc = 'abcdefghijklmnopqrstuvwxyz';
var d = new VigenèreAutokeyCipher(keyy, abcc);
// console.log(d.encode('codewars')); // => 'rovwsoiv'
// console.log(d.decode('laxxhsj')); // => 'waffles'
// console.log(d.encode('amazingly few discotheques provide jukeboxes')); // => 'pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib',
console.log(d.decode('pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib')); // => 'amazingly few discotheques provide jukeboxes',

// var keyy = 'PASSWORD';
// var abcc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// var d = new VigenèreAutokeyCipher(keyy, abcc);
// console.log(d.encode('AAAAAAAAPASSWORDAAAAAAAA')); // => 'PASSWORDPASSWORDPASSWORD'
// console.log(d.decode('PASSWORDPASSWORDPASSWORD')); // => 'AAAAAAAAPASSWORDAAAAAAAA'
/*
I LOOVE PEANUTS
B ANANA BANANAB

**map each letter to a number in alphaber**

9 12,15,15,22,6 16,5,1,14,21,20,19
2 1,14,1,14,1   2,1,14,1,14,1,2

**add them**

11 13,3,16,10,7 18,6,15,15,9,21,21 (no more than 26 since we've got alphabet connection, so 29 becomes 3 here)

**map it back to the letter** 

K MCPJG RFOOIUU
*/
