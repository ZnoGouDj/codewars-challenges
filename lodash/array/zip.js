function zip(...arrays) {
  let result = [];
  let maxArraysLength = Math.max(...arrays.map(el => el.length));

  for (let i = 0; i < maxArraysLength; i++) {
    let payload = [];
    for (let j = 0; j < arrays.length; j++) {
      payload.push(arrays[j][i]);
    }
    result.push([...payload]);
    payload.length = 0;
  }

  return result;
}

console.log(zip(['a', 'b'], [1, 2], [true, false])); // => [['a', 1, true], ['b', 2, false]]
