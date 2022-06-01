function groupBy(collection, iteratee) {
  let result = {};

  switch (typeof iteratee) {
    case 'function':
      //
      break;
    case 'string':
      //
      break;
    default:
      return collection;
  }

  return result;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
console.log(groupBy(['one', 'two', 'three'], 'length'));
// => { '3': ['one', 'two'], '5': ['three'] }
