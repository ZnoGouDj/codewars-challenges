function xor(...arrays) {
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
    if (!obj[joinArrays[i]]) {
      result.push(joinArrays[i]);
      obj[joinArrays[i]] = 'occupied';
    } else {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === joinArrays[i]) {
          result.splice(j, 1);
        }
      }
    }
  }

  return result;
}

console.log(xor([2, 1], [2, 3])); // => [1, 3]

console.log(xor([2, 1], [2, 3], [2, 5])); // => [1, 3, 5]

console.log(xor([2, 1], [2, 3], [2, 5], [2, 1])); // => [3, 5]

console.log(xor([2, 1], [2, 3], [2, 5], [2, 9], [2, 7, 8])); // => [1, 3, 5, 9, 7, 8]

console.log(xor([1, 1, 3], [1, 1, 2])); // => [3, 2]
