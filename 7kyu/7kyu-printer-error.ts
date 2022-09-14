function printerError(s) {
  return s.match(/[n-z]+/g) ? `${s.match(/[n-z]+/g).join('').length}/${s.length}` : `0/${s.length}`;
}

const printerError2 = ($) => [($.match(/[n-z]/g) || []).length, $.length].join('/');

const printerError1 = (s) => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;
