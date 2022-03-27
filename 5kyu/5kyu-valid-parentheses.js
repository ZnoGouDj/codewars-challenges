function validParentheses(parens) {
  let arr = parens.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' && arr[i + 1] === ')') {
      arr.splice(i, 2);
      i = -1;
    }
  }

  return !arr.length;
}

//!

function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}
