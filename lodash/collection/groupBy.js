function groupBy(collection, iteratee) {
  let result = {};

  for (let i = 0; i < collection.length; i++) {
    let el = collection[i];
    switch (typeof iteratee) {
      case 'function':
        if (!result[iteratee(el)]) {
          result[iteratee(el)] = [el];
        } else {
          result[iteratee(el)].push(el);
        }
        break;
      case 'string':
        if (!result[el[iteratee]]) {
          result[el[iteratee]] = [el];
        } else {
          result[el[iteratee]].push(el);
        }
        break;
      default:
        return collection;
    }
  }

  return result;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
console.log(groupBy(['one', 'two', 'three'], 'length'));
// => { '3': ['one', 'two'], '5': ['three'] }
