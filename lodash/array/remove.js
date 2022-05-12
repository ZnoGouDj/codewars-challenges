function remove(array, predicate) {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      result.unshift(array[i]);
      array.splice(i, 1);
    }
  }

  return result;
}

var array = [1, 2, 3, 4];
var evens = remove(array, function (n) {
  return n % 2 == 0;
});

console.log(array); // => [1, 3]

console.log(evens); // => [2, 4]
