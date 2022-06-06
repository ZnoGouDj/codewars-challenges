function reduce(collection, iteratee, accumulator) {
  let result = accumulator;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (typeof result === 'number') {
        result = iteratee(result, collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (typeof result === 'object') {
        result = iteratee(result, collection[key], key);
      }
    }
  }

  return result;
}

console.log(
  reduce(
    [1, 2],
    function (sum, n) {
      return sum + n;
    },
    0
  )
);
// => 3

console.log(
  reduce(
    { a: 1, b: 2, c: 1 },
    function (result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    },
    {}
  )
);
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
