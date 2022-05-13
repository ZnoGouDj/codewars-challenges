function sortedIndex(array, value) {
  let arrayToSort = [...array, value].sort((a, b) => a - b);

  for (let i = 0; i < arrayToSort.length; i++) {
    if (arrayToSort[i] === value) {
      return i;
    }
  }

  throw new Error('Incorrect value');
}
// Uses a binary search to determine the lowest index at which value should be
// inserted into array in order to maintain its sort order.

console.log(sortedIndex([30, 50], 40)); // => 1
