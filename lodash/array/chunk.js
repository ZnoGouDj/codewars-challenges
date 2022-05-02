function chunk(arr, num = 1) {
  let result = [];

  for (let i = 0; i < arr.length; i += num) {
    let chunk = arr.slice(i, num + i);
    result.push(chunk);
  }

  return result;
}

// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.

console.log(chunk([])); // => []
console.log(chunk(['a', 'b', 'c', 'd'], 1)); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk(['a', 'b', 'c', 'd'], 2)); // => [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // => [['a', 'b', 'c'], ['d']]
