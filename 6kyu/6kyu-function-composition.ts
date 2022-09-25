const compose =
  (f, g) =>
  (...x) =>
    f(g(...x));

const add1 = function (a) {
  return a + 1;
};
const id = function (a) {
  return a;
};

console.log(compose(add1, id)(0)); // => 1

//?

const add2 = function (a) {
  return a + 1;
};
const addAll3 = function (a, b, c) {
  return a + b + c;
};

console.log(compose(add2, addAll3)(1, 2, 3)); // => 7
