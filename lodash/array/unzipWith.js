function unzipWith(array, iteratee) {
  let result = [];

  let count = 0;

  while (count < array[0].length) {
    let localResult = 0;
    for (let i = 0; i < array.length; i++) {
      localResult += array[i][count];
    }
    result.push(localResult);
    localResult = 0;
    count++;
  }

  return result;
}

var zipped = [
  [1, 10, 100],
  [2, 20, 200],
];

console.log(unzipWith(zipped, '_.add'));
// => [3, 30, 300]
