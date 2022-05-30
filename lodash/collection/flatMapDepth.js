function flatMapDepth(collection, iteratee, depth = 1) {
  return collection;
}

function duplicate(n) {
  return [[[n, n]]];
}

console.log(flatMapDepth([1, 2], duplicate, 2)); // => [[1, 1], [2, 2]]
