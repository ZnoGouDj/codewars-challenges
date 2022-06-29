function findMissing(list) {
  let slice;
  let diffs;

  for (let i = 1; i < list.length - 1; i++) {
    let diffOne = Math.abs(list[i - 1] - list[i]);
    let diffTwo = Math.abs(list[i + 1] - list[i]);

    if (diffOne !== diffTwo) {
      slice = [list[i - 1], list[i], list[i + 1]];
      diffs = [diffOne, diffTwo];
      break;
    }
  }

  let isNegative = slice.every(el => el <= 0);
  if (isNegative) slice = slice.map(el => Math.abs(el));

  for (let i = slice.length - 1; i > 0; i--) {
    if (slice.indexOf(Math.abs(slice[i]) - Math.abs(Math.min(...diffs))) === -1) {
      return isNegative
        ? -(Math.abs(slice[i]) - Math.abs(Math.min(...diffs)))
        : Math.abs(slice[i]) - Math.abs(Math.min(...diffs));
    }
  }

  return [slice, diffs];
}

var findMissing1 = function (list) {
  var step = (list[list.length - 1] - list[0]) / list.length;
  return (
    list.filter(function (val, index) {
      return val !== list[0] + index * step;
    })[0] - step
  );
};

var findMissing2 = function (list) {
  var expected_sum = ((list[0] + list[list.length - 1]) * (list.length + 1)) / 2;
  var sum = list.reduce(function (acc, x) {
    return acc + x;
  });
  return expected_sum - sum;
};
