function zipWith(arrays, iteratee) {
  return arrays;
}

console.log(
  zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
    return a + b + c;
  })
); // => [111, 222]
