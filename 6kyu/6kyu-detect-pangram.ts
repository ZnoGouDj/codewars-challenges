function isPangram(string: S): B {
  let str = string.toUpperCase().split(' ').join('');

  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  for (let i = 0; i < alphabet.length; i++) {
    if (str.includes(alphabet[i])) {
      alphabet.splice(i, 1);
      i = -1;
    }
  }

  return !alphabet.length;
}

//!

function isPangram1(string: S): B {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); //true
console.log(isPangram('This is not a pangram.')); //false

console.assert(isPangram('The quick brown fox jumps over the lazy dog.') === true);
console.assert(isPangram('This is not a pangram.') === false);
