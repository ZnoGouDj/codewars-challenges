// function sortedUniq(array) {
//   return [...new Set(array)];
// }

function sortedUniq(array) {
  let obj = {};
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof obj[array[i]] == 'undefined') {
      obj[array[i]] = 'Not undefined anymore';
      result.push(array[i]);
    }
  }

  return result;
}
// Creates a duplicate-free version of an array, in which only the
// first occurrence of each element is kept.The order of result values
// is determined by the order they occur in the array.

console.log(sortedUniq([1, 1, 2])); // => [1, 2]
