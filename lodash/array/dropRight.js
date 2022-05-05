// function dropRight(arr, num = 1) {
//   let end = arr.length - num < 0 ? 0 : arr.length - num;
//   return arr.slice(0, end);
// }

// no slice?

function dropRight(arr, num = 1) {
  return arr.filter((el, index) => {
    return index < arr.length - num;
  });
}

// Creates a slice of array with n elements dropped from the end.

console.log(dropRight([1, 2, 3])); // => [1, 2]
console.log(dropRight([1, 2, 3], 2)); // => [1]
console.log(dropRight([1, 2, 3], 5)); // => []
console.log(dropRight([1, 2, 3], 0)); // => [1, 2, 3]
