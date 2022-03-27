function deleteNth(arr, n) {
  let result = [...arr];
  let occurences = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === result[j]) {
        occurences++;
        if (occurences > n) {
          result.splice(j, 1);
        }
      }
    }
    occurences = 0;
  }

  return result;
}

//!

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1)); // [20, 37, 21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]
