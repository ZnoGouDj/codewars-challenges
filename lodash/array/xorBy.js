function xorBy(iteratee, ...arrays) {
  let result = [];
  let maxLength = Math.max(...arrays.map(arr => arr.length));
  for (let i = 0; i < maxLength; i++) {
    let array = [];
    for (let j = 0; j < arrays.length; j++) {
      if (arrays[j][i] !== undefined) {
        array.push(arrays[j][i]);
      }
    }
    result.push([...array]);
    array.length = 0;
  }
  let joinArrays = result.reduce((acc, val) => acc.concat(val), []);
  result.length = 0;
  let obj = {};
  for (let i = 0; i < joinArrays.length; i++) {
    if (typeof iteratee === 'function') {
      if (!obj[iteratee(joinArrays[i])]) {
        result.push(joinArrays[i]);
        obj[iteratee(joinArrays[i])] = 'occupied';
      } else {
        for (let j = 0; j < result.length; j++) {
          if (iteratee(result[j]) === iteratee(joinArrays[i])) {
            result.splice(j, 1);
          }
        }
      }
    } else if (typeof iteratee === 'string') {
      if (!obj[joinArrays[i][iteratee]]) {
        result.push(joinArrays[i]);
        obj[joinArrays[i][iteratee]] = 'occupied';
      } else {
        for (let j = 0; j < result.length; j++) {
          if (result[j][iteratee] === joinArrays[i][iteratee]) {
            result.splice(j, 1);
          }
        }
      }
    }
  }
  return result;
} // code monster

console.log(xorBy(Math.floor, [2.1, 1.2], [2.3, 3.4])); // => [1.2, 3.4]

// The `_.property` iteratee shorthand.
console.log(xorBy('x', [{ x: 1 }], [{ x: 2 }, { x: 1 }])); // => [{ 'x': 2 }]

console.log(xorBy(Math.floor, [2.1, 1.2], [2.3, 3.4], [2.3, 5.4])); // => [1.2, 3.4, 5.4]
