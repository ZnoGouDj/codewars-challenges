function difference(arr, ...values) {
  let result = [];
  let output = [];

  for (let i = 0; i < values.length; i++) {
    result = result.concat(values[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) < 0) {
      output.push(arr[i]);
    }
  }

  return output;
}

// Creates an array of array values not included in the other
// given arrays using SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.

console.log(difference([2, 1], [2, 3])); // => [1]
console.log(difference([2, 1], [2, 3], [2, 3, 5])); // => [1]
console.log(difference([2, 1], [2, 3], [2, 3, 5], [5, 9, 1])); // => []
