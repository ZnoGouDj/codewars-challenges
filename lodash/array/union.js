function union(...arrays) {
  let joinedArrays = arrays.reduce((acc, val) => acc.concat(val), []);

  return joinedArrays.filter((el, index) => index === joinedArrays.indexOf(el));
}

console.log(union([2], [1, 2])); // => [2, 1]
console.log(union([3, 2], [1, 2])); // => [3, 2, 1]
console.log(union([1, 2, 3, 4], [2, 3], [0], [10])); // => [1, 2, 3, 4, 0, 10]
