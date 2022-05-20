function unionWith(arr1, arr2, comparator) {
  let idkHowToName = arr1.concat(arr2).map(el => JSON.stringify(el));

  return idkHowToName.filter((el, i) => i === idkHowToName.indexOf(el));
}

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

console.log(unionWith(objects, others, '_.isEqual')); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
