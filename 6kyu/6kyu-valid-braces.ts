function validBraces(braces: string): boolean {
  let arr = braces.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' && arr[i + 1] === ')') {
      arr.splice(i, 2);
      i = -1;
    } else if (arr[i] === '[' && arr[i + 1] === ']') {
      arr.splice(i, 2);
      i = -1;
    } else if (arr[i] === '{' && arr[i + 1] === '}') {
      arr.splice(i, 2);
      i = -1;
    }
  }

  return !arr.length;
}

//!
function validBraces1(braces: string): boolean {
  while (braces.indexOf('{}') != -1 || braces.indexOf('()') != -1 || braces.indexOf('[]') != -1) {
    braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
  }
  return braces.length == 0;
}

console.log(validBraces('()))')); // false
console.log(validBraces('()')); // true
console.log(validBraces('[]')); // true
console.log(validBraces('{}')); // true
console.log(validBraces('(){}[]')); // true
console.log(validBraces('([{}])')); // true
console.log(validBraces('(}')); // false
console.log(validBraces('[(])')); // false
