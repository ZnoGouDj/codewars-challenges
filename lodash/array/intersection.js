function intersection(array, ...arrays) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let counter = 0;
    let current = array[i];
    for (let j = 0; j < arrays.length; j++) {
      if (arrays[j].indexOf(current) > -1) counter++;
      if (counter === arrays.length) result.push(current);
    }
  }

  return result;
}

// Creates an array of unique values that are included in all given arrays using
// SameValueZero for equality comparisons.The order and references of result values
// are determined by the first array.

console.log(intersection([2, 1], [2, 3])); // => [2]
console.log(intersection([2, 1, 3, 5], [2, 4, 6, 7], [3, 2, 1, 7])); // => [2]
console.log(intersection([2, 1, 3, 5], [2, 4, 5, 7], [3, 2, 5, 7], [2, 5, 2, 5])); // => [2, 5]
