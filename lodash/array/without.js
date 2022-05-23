function without(array, ...values) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (values.indexOf(array[i]) < 0) {
      result.push(array[i]);
    }
  }
  return result;
}

// Creates an array excluding all given values using SameValueZero for equality comparisons.

console.log(without([2, 1, 2, 3], 1, 2)); // => [3]
console.log(without([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5, 9)); // => [1, 3, 4, 6, 7, 8, 10]
console.log(without([99, 88, 0, 'a', 'e', 123, 20932, 1, 2, 3], 88, 'a', 20932)); // => [99, 0, "e", 123, 1, 2, 3]
