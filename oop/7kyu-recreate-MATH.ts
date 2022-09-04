Math.ceil = function (x) {
  let arr = String(x).split('.');
  if (arr.length < 2) return x;
  else return +arr[0] + 1;
};

Math.floor = function (x) {
  let arr = String(x).split('.');
  if (arr.length < 2) return x;
  else return +arr[0];
};

Math.round = function (x) {
  let arr = String(x).split('.');
  if (arr.length < 2) return x;
  if (+arr[1].charAt(0) >= 5) return +arr[0] + 1;
  else return +arr[0];
};

Math.abs = function (x) {
  if (x < 0) return x * -1;
  else return x;
};

Math.max = function () {
  const args = Array.from(arguments);

  return args.sort((a, b) => b - a)[0];
};

Math.min = function () {
  const args = Array.from(arguments);

  return args.sort((a, b) => a - b)[0];
};

Math.pow = function (x, y) {
  if (!y) return 0;
  let result = x;
  for (let i = 0; i < y - 1; i++) {
    result *= x;
  }
  return result;
};

//!
Math.ceil = function (x) {
  return x % 1 == 0 ? x : Math.floor(x) + 1;
};

Math.floor = function (x) {
  return x - (x % 1);
};

Math.round = function (x) {
  return x % 1 >= 0.5 ? Math.ceil(x) : Math.floor(x);
};

Math.abs = function (x) {
  return x < 0 ? x * -1 : x;
};

Math.max = function (...args) {
  return args.reduce((x, y) => (x > y ? x : y));
};

Math.min = function (...args) {
  return args.reduce((x, y) => (x < y ? x : y));
};

Math.pow = function (x, y) {
  return y > 0 ? [...Array(y)].map(() => x).reduce((x, y) => x * y) : 1;
};
