function nth(array, n = 0) {
  return n >= 0 ? array[n] : array[array.length - -n];
}

// Gets the element at index n of array.
// If n is negative, the nth element from the end is returned.

var array = ['a', 'b', 'c', 'd'];

console.log(nth(array, 1)); // => 'b'

console.log(nth(array, -2)); // => 'c';
