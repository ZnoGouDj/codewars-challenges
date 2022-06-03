function invokeMap(collection, path, args) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    // result.push(path.apply(collection[i], args));
  }

  return result;
}

console.log(
  invokeMap(
    [
      [5, 1, 7],
      [3, 2, 1],
    ],
    'sort'
  )
); // => [[1, 5, 7], [1, 2, 3]]

console.log(invokeMap([123, 456], String.prototype.split, '')); // => [['1', '2', '3'], ['4', '5', '6']]
