function zipWith(iteratee, ...arrays) {
  let arrayRotate = [];
  let result = [];

  for (let i = 0; i < arrays[0].length; i++) {
    let localArray = [];
    for (let j = 0; j < arrays.length; j++) {
      localArray.push(arrays[j][i]);
    }
    arrayRotate.push([...localArray]);
    localArray.length = 0;
  }

  for (let i = 0; i < arrayRotate.length; i++) {
    let calc = [...arrayRotate[i]];
    result.push(iteratee(...calc));
  }

  return result;
}

console.log(
  zipWith(
    function (a, b, c) {
      return a + b + c;
    },
    [1, 2],
    [10, 20],
    [100, 200]
  )
); // => [111, 222]
