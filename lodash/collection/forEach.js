function forEach(collection, iteratee) {
  for (let i in collection) {
    if (collection.hasOwnProperty(i)) {
      iteratee(collection[i], i);
    }
  }
}

console.log(
  forEach([1, 2], function (value) {
    console.log(value);
  })
);
// => Logs `1` then `2`.

console.log(
  forEach({ a: 1, b: 2 }, function (value, key) {
    console.log(key);
  })
);
// => Logs 'a' then 'b' (iteration order is not guaranteed).
