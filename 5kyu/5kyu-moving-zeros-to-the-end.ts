function moveZeros(arr) {
  const removeZeroes = arr.filter(el => el !== 0);
  const length = removeZeroes.length;
  removeZeroes.length = arr.length;
  return removeZeroes.fill(0, length, removeZeroes.length);
}

var moveZeros1 = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      }),
    );
};
