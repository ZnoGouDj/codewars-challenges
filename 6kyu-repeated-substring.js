function f(s) {
  let arr = s.split('');

  let splitted;

  for (let i = s.length; i >= 2; i--) {
    let arrCopy = [...arr];

    splitted = splitToChunks(arrCopy, i);

    let joined = splitted.map(el => el.join(''));

    if (joined.every((val, i, arr) => val === arr[0])) {
      return [splitted[0].join(''), i];
    }
  }

  return [s, 1];
}

function splitToChunks(array, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

//!

function f(s) {
  for (let i = 1; i < s.length; i++) {
    if (s.substring(0, i).repeat(s.length / i) === s) {
      return [s.substring(0, i), s.length / i];
    }
  }
  return [s, 1];
}

console.log(f('ababab')); // ['ab', 3]
console.log(f('abcde')); // ['abcde', 1]
