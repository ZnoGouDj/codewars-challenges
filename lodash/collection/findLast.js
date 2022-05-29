function findLast(collection, predicate, fromIndex = collection.length - 1) {
  for (let i = fromIndex; i > -1; i--) {
    switch (typeof predicate) {
      case 'function':
        if (predicate(collection[i])) {
          return collection[i];
        }
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          if (collection[i][predicate[0]] === predicate[1]) {
            return collection[i];
          }
        } else {
          if (JSON.stringify(collection[i]).includes(JSON.stringify(predicate).slice(1, -1))) {
            return collection[i];
          }
        }
        break;
      default:
        if (collection[i][predicate]) {
          return collection[i];
        }
        break;
    }
  }
}

console.log(
  findLast([1, 2, 3, 4], function (n) {
    return n % 2 == 1;
  })
); // => 3
