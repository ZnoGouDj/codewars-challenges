var runLengthEncoding = function (str) {
  let result: [number, string][] = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result.push([count, str[i]]);
      count = 1;
    }
  }

  return result;
};

console.log(runLengthEncoding('hello world!'));
//=>[[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

console.log(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb'));
// => [[34,'a'], [3,'b']]
