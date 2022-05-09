function initial(array) {
  return array.slice(0, array.length - 1);
}

// gets all but the last element of array

console.log(initial([1, 2, 3])); // => [1, 2]
