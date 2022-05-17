function takeRight(array, n = 1) {
  return array.slice(array.length - n > 0 ? array.length - n : 0);
}

console.log(takeRight([1, 2, 3])); // => [3]

console.log(takeRight([1, 2, 3], 2)); // => [2, 3]

console.log(takeRight([1, 2, 3], 5)); // => [1, 2, 3]

console.log(takeRight([1, 2, 3], 0)); // => []
