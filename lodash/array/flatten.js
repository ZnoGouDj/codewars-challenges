function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

// Flattens array a single level deep.

console.log(flatten([1, [2, [3, [4]], 5]])); // => [1, 2, [3, [4]], 5]
