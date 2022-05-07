function dropRightWhile(users, predicate) {
  let result = [...users];

  if (typeof predicate === 'function') {
    for (let i = users.length - 1; i > -1; i--) {
      if (predicate(users[i])) {
        result.pop();
      } else {
        return result;
      }
    }
  }

  if (typeof predicate === 'object') {
    let resultLocal = [...users].map(el => JSON.stringify(el));
    let predicateLocal = Array.isArray(predicate) ? predicate.join('":') : JSON.stringify(predicate);

    for (let i = resultLocal.length - 1; i > -1; i--) {
      if (resultLocal[i].includes(predicateLocal)) {
        result.pop();
      } else {
        return result;
      }
    }
  }

  return result;
}

// Creates a slice of array excluding elements dropped from the end.
// Elements are dropped until predicate returns falsey.
// The predicate is invoked with three arguments: (value, index, array).

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

console.log(
  dropRightWhile(users, function (o) {
    return !o.active;
  })
); // => objects for ['barney']

// The `_.matches` iteratee shorthand.
console.log(dropRightWhile(users, { user: 'pebbles', active: false })); // => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
console.log(dropRightWhile(users, ['active', false])); // => objects for ['barney']

// The `_.property` iteratee shorthand.
console.log(dropRightWhile(users, 'active')); // => objects for ['barney', 'fred', 'pebbles']
