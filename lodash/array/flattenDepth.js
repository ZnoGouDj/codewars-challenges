function flattenDepth(array, depth = 1) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!depth) return array;
    if (Array.isArray(array[i])) {
      let flat = flattenDepth(array[i], depth - 1);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

var array = [1, [2, [3, [4]], 5]];

console.log(flattenDepth(array, 1)); // => [1, 2, [3, [4]], 5]
console.log(flattenDepth(array, 2)); // => [1, 2, 3, [4], 5]
