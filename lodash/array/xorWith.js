function xorWith(comparator, ...arrays) {
  let obj = {};
  let result = [];
  let joinedArrays = arrays.reduce((acc, val) => acc.concat(val), []).map(el => JSON.stringify(el));

  for (let i = 0; i < joinedArrays.length; i++) {
    let element = joinedArrays[i];
    if (!obj[element]) {
      result.push(element);
      obj[element] = 'occupied';
    } else {
      for (let j = 0; j < result.length; j++) {
        if (result.indexOf(element) > -1) {
          result.splice(result.indexOf(element), 1);
        }
      }
    }
  }

  return result.map(el => JSON.parse(el));
}

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
]; //implementing .isEqual only, as usual

console.log(xorWith('_.isEqual', objects, others)); // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
