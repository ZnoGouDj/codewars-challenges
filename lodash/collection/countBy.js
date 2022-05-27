function countBy(array, iteratee) {
  let result = {};

  for (let i = 0; i < array.length; i++) {
    if (typeof iteratee === 'function') {
      if (!result[iteratee(array[i])]) {
        result[iteratee(array[i])] = 1;
      } else {
        result[iteratee(array[i])] += 1;
      }
    } else if (typeof iteratee === 'string') {
      if (!result[array[i][iteratee]]) {
        result[array[i][iteratee]] = 1;
      } else {
        result[array[i][iteratee]] += 1;
      }
    }
  }

  return result;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
console.log(countBy(['one', 'two', 'three'], 'length')); // => { '3': 2, '5': 1 }
