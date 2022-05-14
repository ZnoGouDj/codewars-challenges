// function sortedIndexOf(array, value) {
//   let sortArray = [...array].sort((a, b) => a - b);

//   for (let i = 0; i < sortArray.length; i++) {
//     if (value === sortArray[i]) return i;
//   }
// }

function sortedIndexOf(array, value) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === value) {
      // found
      for (let i = middle; i >= 0; i--) {
        if (array[i] !== value) {
          return i + 1;
        }
      }

      return middle;
    } else if (array[middle] < value) {
      //continue right
      start = middle + 1;
    } else if (array[middle] > value) {
      //continue left
      end = middle - 1;
    }
  }

  return -1;
}

console.log(sortedIndexOf([4, 5, 5, 5, 6], 5)); // => 1
console.log(sortedIndexOf([4, 5, 5, 5, 5, 6], 5)); // => 1

console.log(sortedIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 1)); // => 0
console.log(sortedIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 6)); // => 5
console.log(sortedIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 15)); // => -1
