function castArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (!arguments.length) return [];

  return [value];
}

console.log(castArray(1));
// => [1]

console.log(castArray({ a: 1 }));
// => [{ 'a': 1 }]

console.log(castArray('abc'));
// => ['abc']

console.log(castArray(null));
// => [null]

console.log(castArray(undefined));
// => [undefined]

console.log(castArray());
// => []

var array = [1, 2, 3];
console.log(castArray(array) === array);
// => true
