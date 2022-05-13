function slice(array, start = 0, end = array.length) {
  let result = [];

  if (start < 0) {
    start = array.length + start;
  }
  if (end < 0) {
    end = array.length + end;
  }

  if (start < 0 || end < 0) return [];

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}

// Creates a slice of array from start up to, but not including, end.

console.log(slice([1, 2, 3], 1, 2)); // [2]
console.log(slice([1, 2, 3], 0)); // [1, 2, 3]
console.log(slice([1, 2, 3], -4, -3)); // []
console.log(slice([1, 2, 3])); // [1, 2, 3]
console.log(slice([1, 2, 3, 4, 5], -2)); // [4, 5]
console.log(slice([1, 2, 3, 4, 5], 2, -1)); // [3, 4]
