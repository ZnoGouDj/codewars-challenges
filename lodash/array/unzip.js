function unzip(array) {
  let result = [];

  let payload = [];
  let count = 0;

  while (count < array[0].length) {
    for (let i = 0; i < array.length; i++) {
      payload.push(array[i][count]);
    }
    result.push([...payload]);
    payload.length = 0;
    count++;
  }

  return result;
}

var zipped = [
  ['a', 1, true],
  ['b', 2, false],
];

console.log(unzip(zipped)); // => [['a', 'b'], [1, 2], [true, false]]
