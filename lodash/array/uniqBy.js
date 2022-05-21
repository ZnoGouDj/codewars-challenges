function uniqBy(array, iteratee) {
  let obj = {};
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof iteratee === 'function') {
      if (!obj[iteratee(array[i])]) {
        obj[iteratee(array[i])] = 'occupied';
        result.push(array[i]);
      }
    } else if (typeof iteratee === 'string') {
      if (!obj[array[i][iteratee]]) {
        obj[array[i][iteratee]] = 'occupied';
        result.push(array[i]);
      }
    }
  }

  return result;
}

console.log(uniqBy([2.1, 1.2, 2.3], Math.floor)); // => [2.1, 1.2]

// The `_.property` iteratee shorthand.
console.log(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')); // => [{ 'x': 1 }, { 'x': 2 }]
