function intersectionWith(firstArray, restArrays, comparator) {
  const stringifiedObjects = restArrays.map(el => (typeof el === 'object' ? JSON.stringify(el) : el));

  return firstArray.filter(el => stringifiedObjects.indexOf(typeof el === 'object' ? JSON.stringify(el) : el) > -1);
}

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

console.log(intersectionWith(objects, others, 'isEqual'));
// => [{ 'x': 1, 'y': 2 }]
