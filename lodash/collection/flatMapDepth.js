function flatMapDepth(collection, iteratee, depth = 1) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    result = result.concat(iteratee(collection[i]));
  }

  if (depth <= 1) return result;

  let res = result.reduce((acc, val) => acc.concat(val), []);
  depth -= 2;

  while (depth) {
    res = res.reduce((acc, val) => acc.concat(val), []);
    depth--;
  }

  return res;
}

function duplicate(n) {
  return [[[n, n]]];
}

console.log(flatMapDepth([1, 2], duplicate, 2)); // => [[1, 1], [2, 2]]
console.log(flatMapDepth([1, 2], duplicate, 1));
