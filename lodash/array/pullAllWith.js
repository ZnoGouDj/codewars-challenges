function pullAllWith(arrayLocal, values, comparator) {
  const stringifiedObjects = values.map(el => (typeof el === 'object' ? JSON.stringify(el) : el));

  array = arrayLocal.filter(el => stringifiedObjects.indexOf(typeof el === 'object' ? JSON.stringify(el) : el) === -1);
}

var array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];

pullAllWith(array, [{ x: 3, y: 4 }], 'isEqual');
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
