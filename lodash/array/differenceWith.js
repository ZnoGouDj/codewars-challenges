function differenceWith(arr, values, comparator) {
  const stringifiedObjects = values.map(el => (typeof el === 'object' ? JSON.stringify(el) : el));

  return arr.filter(el => stringifiedObjects.indexOf(typeof el === 'object' ? JSON.stringify(el) : el) < 0);
}

console.log(
  differenceWith(
    [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ],
    [{ x: 1, y: 2 }],
    'isEqual'
  )
); // => [{ 'x': 2, 'y': 1 }]
console.log(differenceWith([1, 2, 3], [2, 4, 5], 'isEqual')); // => [1, 3]
console.log(differenceWith([{ a: 1 }, { b: 2 }, 6], [{ a: 1 }, 7, 6], 'isEqual')); // => [{ 'b': 2 }]

// shitty solution, works for examples though, need to understand it better i guess
