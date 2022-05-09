function indexOf(array, value, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) return i;
  }
}

console.log(indexOf([1, 2, 1, 2], 2)); // => 1

// Search from the `fromIndex`.
console.log(indexOf([1, 2, 1, 2], 2, 2)); // => 3
