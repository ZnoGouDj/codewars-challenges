function sortedLastIndexOf(array, value) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor(array.length / 2);

    if (array[middle] === value) {
      for (let i = middle; i < array.length; i++) {
        if (array[i] !== value) return i - 1;
      }
    } else if (array[middle] > value) {
      start = middle + 1;
    } else if (array[middle] < value) {
      end = middle - 1;
    }
  }

  return -1;
}

console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5)); // => 3
