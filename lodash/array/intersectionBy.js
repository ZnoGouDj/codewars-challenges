function intersectionBy(firstArray, restArrays, iteratee) {
  let result = [];
  let filtered = [];
  let method;

  if (typeof iteratee === 'function') {
    filtered = restArrays.map(el => iteratee(el));
    method = 'function';
  } else if (typeof iteratee === 'string') {
    filtered = restArrays.map(el => el[iteratee]);
    method = '';
  }

  for (let i = 0; i < firstArray.length; i++) {
    let currentEl = firstArray[i];
    if (method && filtered.indexOf(iteratee(currentEl)) > -1) {
      result.push(currentEl);
    } else if (!method && filtered.indexOf(currentEl[iteratee]) > -1) {
      result.push(currentEl);
    }
  }

  return result;
}

console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [2.1]

// The `_.property` iteratee shorthand.
console.log(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')); // => [{ 'x': 1 }]
