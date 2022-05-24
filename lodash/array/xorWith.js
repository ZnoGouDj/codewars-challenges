function xorWith(comparator, ...arrays) {
  return arrays;
}

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

console.log(xorWith(objects, others, _.isEqual)); // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
