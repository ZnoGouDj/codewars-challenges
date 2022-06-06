function size(collection) {
  return Object.keys(collection).length;
}

console.log(size([1, 2, 3]));
// => 3

console.log(size({ a: 1, b: 2 }));
// => 2

console.log(size('pebbles'));
// => 7
