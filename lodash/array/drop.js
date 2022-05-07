// function drop(arr, num = 1) {
//   return arr.slice(num, arr.length);
// }

// without slice?

// function drop(arr, num = 1) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

function drop(arr, num = 1) {
  return arr.filter((el, index) => {
    return index >= num;
  });
}

// Creates a slice of array with n elements dropped from the beginning.

console.log(drop([1, 2, 3])); // => [2, 3]
console.log(drop([1, 2, 3], 2)); // => [3]
console.log(drop([1, 2, 3], 5)); // => []
console.log(drop([1, 2, 3], 0)); // => [1, 2, 3]
