function sortedUniqBy(array, iteratee) {
  let obj = {};
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!obj.hasOwnProperty(iteratee(array[i]))) {
      obj[iteratee(array[i])] = 'occupied!';
      result.push(array[i]);
    }
  }

  return result;
}

console.log(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)); // => [1.1, 2.3]
