function findLastIndex(array, predicate, fromIndex = 0) {
  let jsonPredicate = Array.isArray(predicate) ? predicate.join('":') : JSON.stringify(predicate);

  for (let i = array.length - 1; i >= 0; i--) {
    if (typeof predicate === 'function') {
      if (predicate(array[i])) {
        return i;
      }
    } else if (typeof predicate === 'object') {
      let jsonArr = JSON.stringify(array[i]);
      if (jsonArr.includes(jsonPredicate)) {
        return i;
      }
    } else if (typeof predicate === 'string') {
      if (array[i][predicate]) {
        return i;
      }
    }
  }
}

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

console.log(
  findLastIndex(users, function (o) {
    return o.user == 'pebbles';
  })
); // => 2

// The `_.matches` iteratee shorthand.
console.log(findLastIndex(users, { user: 'barney', active: true })); // => 0

// The `_.matchesProperty` iteratee shorthand.
console.log(findLastIndex(users, ['active', false])); // => 2

// The `_.property` iteratee shorthand.
console.log(findLastIndex(users, 'active')); // => 0
