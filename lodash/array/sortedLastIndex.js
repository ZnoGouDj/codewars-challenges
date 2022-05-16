// function sortedLastIndex(array, value) {
//   let newArray = [...array, value].sort((a, b) => a - b);

//   for (let i = newArray.length - 1; i >= 0; i--) {
//     if (newArray[i] === value) return i;
//   }

//   throw new Error('Incorrect value');
// }

function sortedLastIndex(array, value) {
  let start = array.length - 1;
  let end = 0;

  while (end <= start) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === value) {
      for (let i = mid; i < array.length; i++) {
        if (array[i] !== value) return i;
      }
    } else if (array[mid] < value) {
      end = mid + 1;
    } else if (array[mid] > value) {
      start = mid - 1;
    }
  }

  return -1;
}

console.log(sortedLastIndex([4, 5, 5, 5, 6], 5)); // => 4
