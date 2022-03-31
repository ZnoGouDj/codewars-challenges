function duplicateEncode(word: string): string {
  let arr = word.split('').map(el => el.toLowerCase());
  let obj = {};
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    !obj[arr[i]] ? (obj[arr[i]] = 1) : obj[arr[i]]++;
  }

  for (let j = 0; j < arr.length; j++) {
    obj[arr[j]] > 1 ? (result += ')') : (result += '(');
  }

  return result;
}

//! lastIndexOf() --
//? возвращает индекс последнего вхождения указанного значения в строковый объект String

function duplicateEncode1(word: string): string {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}

console.log(duplicateEncode('din')); // "((("
console.log(duplicateEncode('recede')); // "()()()"
console.log(duplicateEncode('Success')); // ")())())" //?should ignore case
console.log(duplicateEncode('(( @')); // "))(("
