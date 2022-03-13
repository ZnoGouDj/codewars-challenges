function unusedDigits(...args) {
  let str = args.map(el => el.toString()).join('');

  let result = '';

  for (let i = 0; i < 10; i++) {
    if (!str.includes(i)) {
      result += i;
    }
  }
  return result;
}

//!

function unusedDigits(...args) {
  return '0123456789'.replace(new RegExp('[' + args.join('') + ']', 'g'), '');
}

console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"
