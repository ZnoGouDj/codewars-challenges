function findIndex(array, predicate, fromIndex = 0) {
  let jsonPredicate = Array.isArray(predicate) ? predicate.join('":') : JSON.stringify(predicate);

  for (let i = fromIndex; i < array.length; i++) {
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

// This method is like _.find except that it returns the index of the first
// element predicate returns truthy for instead of the element itself.

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

console.log(
  findIndex(users, function (o) {
    return o.user == 'barney';
  })
); // => 0

// The `_.matches` iteratee shorthand.
console.log(findIndex(users, { user: 'fred', active: false })); // => 1

// The `_.matchesProperty` iteratee shorthand.
console.log(findIndex(users, ['active', false])); // => 0

// The `_.property` iteratee shorthand.
console.log(findIndex(users, 'active')); // => 2
