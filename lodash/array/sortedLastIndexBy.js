function sortedLastIndexBy(array, value, iteratee) {
  let isFunction;

  if (typeof iteratee === 'function') isFunction = true;
  else if (typeof iteratee === 'string') isFunction = false;

  for (let i = array.length - 1; i > -1; i--) {
    if (isFunction && iteratee(array[i]) === iteratee(value)) return i + 1;
    else if (!isFunction && array[i][iteratee] === value[iteratee]) return i + 1;
  }
}

var objects = [{ x: 4 }, { x: 5 }];

console.log(
  sortedLastIndexBy(objects, { x: 4 }, function (o) {
    return o.x;
  })
); // => 1

// The `_.property` iteratee shorthand.
console.log(sortedLastIndexBy(objects, { x: 4 }, 'x')); // => 1
