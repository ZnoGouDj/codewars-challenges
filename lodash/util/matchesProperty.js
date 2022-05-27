function matchesProperty(path, srcValue) {
  let jsonPath = `${path}: ${srcValue}`;
}

var objects = [
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
];

_.find(objects, _.matchesProperty('a', 4));
// => { 'a': 4, 'b': 5, 'c': 6 }
