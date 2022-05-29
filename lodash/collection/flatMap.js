function flatMap(collection, iteratee) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    result = result.concat(iteratee(collection[i]));
  }

  return result;
}

function duplicate(n) {
  return [n, n];
}

console.log(flatMap([1, 2], duplicate)); // => [1, 1, 2, 2]
