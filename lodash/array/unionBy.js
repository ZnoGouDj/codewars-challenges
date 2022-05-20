function unionBy(arr1, arr2, iteratee) {
  // let realArguments = Array.prototype.slice.call(arguments);
  // let iteratee = realArguments.splice(-1);
  //?  IDFK, let it be for 2 arrays only ok?
  // let joinedArrays = realArguments.reduce((acc, val) => acc.concat(val), []);
  let joinedArrays = arr1.concat(arr2);
  let result = {};

  if (typeof iteratee === 'function') {
    for (let i = 0; i < joinedArrays.length; i++) {
      if (!result.hasOwnProperty(iteratee(joinedArrays[i]))) {
        result[iteratee(joinedArrays[i])] = joinedArrays[i];
      } else {
        joinedArrays.splice(i, 1);
        i--;
      }
    }
  } else if (typeof iteratee === 'string') {
    for (let i = 0; i < joinedArrays.length; i++) {
      if (!result.hasOwnProperty(joinedArrays[i][iteratee])) {
        result[joinedArrays[i][iteratee]] = joinedArrays[i];
      } else {
        joinedArrays.splice(i, 1);
        i--;
      }
    }
  }
  return joinedArrays;
}

console.log(unionBy([2.1], [1.2, 2.3], Math.floor)); // => [2.1, 1.2]

// The `_.property` iteratee shorthand.
console.log(unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')); // => [{ 'x': 1 }, { 'x': 2 }]
