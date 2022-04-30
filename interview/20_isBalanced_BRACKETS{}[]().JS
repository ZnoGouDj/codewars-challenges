function isBalanced(braces) {
  let filtered = braces.match(/[\[\]\(\)\{\}]+/g).join('');
  while (filtered.indexOf('{}') != -1 || filtered.indexOf('()') != -1 || filtered.indexOf('[]') != -1) {
    filtered = filtered.replace('{}', '').replace('()', '').replace('[]', '');
  }
  return filtered.length == 0;
}

// or
// probably this is faster
function isBalanced1(string) {
  const start = '({[';
  const end = ']})';

  const map = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  const queue = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (start.includes(char)) {
      queue.push(char);
    } else if (end.includes(char)) {
      const last = queue.pop();

      if (map[char] !== last) {
        return false;
      }
    }
  }

  return !queue.length;
}

console.log(isBalanced('(x + y) - (4)')); // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // -> true
console.log(isBalanced('[{()}]')); // -> true
console.log(isBalanced('(50)(')); // -> false
console.log(isBalanced('[{]}')); // -> false
