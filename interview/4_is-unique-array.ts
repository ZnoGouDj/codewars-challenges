function isUnique(string) {
  return [...new Set(string)].length === string.length;
}

function isUnique1(string) {
  let arr = string.split('');

  let counter = 0;

  let result = true;

  arr.forEach(el => {
    arr.forEach(el1 => {
      if (el === el1) {
        counter++;
      }
      if (counter > 1) {
        result = false;
      }
    });
    counter = 0;
  });

  return result;
}

function isUnique2(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (string.lastIndexOf(char) !== i) {
      return false;
    }
  }

  return true;
}

function isUnique3(string) {
  const set = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (set.has(char)) {
      return false;
    }

    set.add(char);
  }

  return true;
}

function isUnique4(string) {
  return new Set(string).size === string.length;
}

console.log(isUnique4('abcdef')); // -> true
console.log(isUnique4('1234567')); // -> true
console.log(isUnique4('abcABC')); // -> true
console.log(isUnique4('abcadef')); // -> false
