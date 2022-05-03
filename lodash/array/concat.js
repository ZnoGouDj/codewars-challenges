function concat(arr, ...values) {
  let result = [...arr];

  for (let i = 0; i < values.length; i++) {
    result = result.concat(values[i]);
  }

  return result;
}

// Creates a new array concatenating array with any additional arrays and/or values.

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]
