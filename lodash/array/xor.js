function xor(...arrays) {
  let result = [];
  let obj = {
    include: [],
    noInclude: [],
  };
  let maxArrLength = Math.max(...arrays.map(el => el.length));
  let count = 0;

  while (count < maxArrLength) {
    for (let i = 0; i < arrays.length; i++) {
      // if (obj.hasOwnProperty(arrays[i][count])) obj[arrays[i][count]] = 'do not include';
      // else obj[arrays[i][count]] = 'include';
      // if (obj.include.indexOf(arrays[i][count])) {
      // }
    }
    count++;
    for (let i in obj) {
      if (obj[i] === 'include') {
        result.push(i);
      }
    }
    obj = {};
  }

  return result;
}

console.log(xor([2, 1], [2, 3])); // => [1, 3]

console.log(xor([2, 1], [2, 3], [2, 5])); // => [1, 3, 5]

console.log(xor([2, 1], [2, 3], [2, 5], [2, 1])); // => [3, 5]

console.log(xor([2, 1], [2, 3], [2, 5], [2, 9], [2, 7, 8])); // => [1, 3, 5, 9, 7, 8]

console.log(xor([1, 1, 3], [1, 1, 2])); // => [3, 2]
