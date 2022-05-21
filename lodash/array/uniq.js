function uniq(array) {
  if (!array) return [];
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(uniq([2, 1, 2])); // => [2, 1]
console.log(uniq([10, 9, 8, 7, 6, 5, 5, 4, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0])); // => [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log(uniq(uniq(['a', 'a', 'a', 'a']))); // => ["a"]
console.log(uniq()); // => []

console.log(
  uniq([
    [1, 2, 3],
    [1, 2, 3],
  ])
); // => [[1, 2, 3], [1, 2, 3]]

console.log(
  uniq([
    { a: 10, b: 9 },
    { a: 10, b: 9 },
  ])
); // => [Object {a: 10, b: 9}, Object {a: 10, b: 9}]
