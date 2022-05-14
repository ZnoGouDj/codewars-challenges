function sortedIndexBy(array, value, iteratee) {
  let isFunction;

  if (typeof iteratee === 'function') isFunction = true;
  else if (typeof iteratee === 'string') isFunction = false;

  let arrayToSort = [...array, value].sort((a, b) => a - b);

  for (let i = 0; i < arrayToSort.length; i++) {
    if (isFunction && iteratee(arrayToSort[i]) === iteratee(value)) return i;
    else if (!isFunction && arrayToSort[i][iteratee] === value[iteratee]) return i;
  }
}

var objects = [{ x: 4 }, { x: 5 }];

console.log(
  sortedIndexBy(objects, { x: 4 }, function (o) {
    return o.x;
  })
); // => 0

// The `_.property` iteratee shorthand.
console.log(sortedIndexBy(objects, { x: 4 }, 'x')); // => 0
