let code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

let d3code = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function encode(string: string, decode = false) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!decode) {
      code[string[i]] ? (result += code[string[i]]) : (result += string[i]);
    } else {
      d3code[string[i]] ? (result += d3code[string[i]]) : (result += string[i]);
    }
  }

  return result;
}

function decode(string: string) {
  return encode(string, true);
}

//!

function encode1(string) {
  return string.replace(/[aeiou]/g, function (x) {
    return '_aeiou'.indexOf(x);
  });
}

function decode1(string) {
  return string.replace(/[1-5]/g, function (x) {
    return '_aeiou'.charAt(x);
  });
}
