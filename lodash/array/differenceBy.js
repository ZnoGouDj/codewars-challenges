function differenceBy(arr, values, iteratee) {
  let arrCopy = [...arr];
  let valuesCopy = [...values];

  if (typeof iteratee === 'function') {
    arrCopy = arrCopy.map(el => iteratee(el));
    valuesCopy = valuesCopy.map(el => iteratee(el));
  } else if (typeof iteratee === 'string') {
    arrCopy = arrCopy.map(el => el[iteratee]);
    valuesCopy = valuesCopy.map(el => el[iteratee]);
  }

  let validIndexes = [];

  for (let i = 0; i < arrCopy.length; i++) {
    if (valuesCopy.indexOf(arrCopy[i]) < 0) {
      validIndexes.push(i);
    }
  }

  return arr.filter((el, index) => validIndexes.indexOf(index) > -1);
}

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [1.2]
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')); // => [{ 'x': 2 }]
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }, { x: 3 }, { x: 5 }], 'x')); // => [{ 'x': 2 }]
