function pullAllBy(array, values, iteratee) {
  let valuesIterated = values.map(el => el[iteratee]);

  for (let i = 0; i < array.length; i++) {
    if (valuesIterated.some(el => el === array[i][iteratee])) {
      array.splice(i, 1);
      i--;
    }
  }
}

var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
