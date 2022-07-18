function ary(func, n = func.length) {
  let result = [];

  return func(n);
}

console.log(['6', '8', '10'].map(el => ary(parseInt, 1)));
// => [6, 8, 10]
