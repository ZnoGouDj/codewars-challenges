function uniqWith(array, comparator) {
  let jsoned = array.map(el => JSON.stringify(el));
  return jsoned.filter((el, index) => index === jsoned.indexOf(el));
}

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 1, y: 2 },
];

console.log(uniqWith(objects, '_.isEqual')); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
