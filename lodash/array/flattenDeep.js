function flattenDeep(array) {
  let result = [];

  array.forEach(el => {
    if (Array.isArray(el)) {
      result = [...result, ...flattenDeep(el)];
    } else {
      result = [...result, el];
    }
  });

  return result;
}

console.log(flattenDeep([1, [2, [3, [4]], 5]])); // => [1, 2, 3, 4, 5]
