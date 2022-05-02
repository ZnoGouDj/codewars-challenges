function compact(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != false) {
      if (arr[i] !== null && arr[i] !== undefined && !isNaN(arr[i])) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

// Creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.

console.log(compact([0, 1, false, 2, '', 3])); // => [1, 2, 3]
console.log(compact([null, 1, undefined, 2, NaN, 3])); // => [1, 2, 3]
