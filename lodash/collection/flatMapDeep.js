function flatMapDeep(collection, iteratee) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    result = result.concat(iteratee(collection[i]));
  }

  let res;

  for (let i = 0; i < result.length; i++) {
    if (Array.isArray(result[i])) {
      res
        ? (res = res.reduce((acc, val) => acc.concat(val), []))
        : (res = result.reduce((acc, val) => acc.concat(val), []));
    }
  }

  return res;
}

function duplicate(n) {
  return [[[n, n]]];
}

console.log(flatMapDeep([1, 2], duplicate)); // => [1, 1, 2, 2]
