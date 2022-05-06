function dropWhile(array, predicate) {}

// Creates a slice of array excluding elements dropped from the beginning.
// Elements are dropped until predicate returns falsey.
// The predicate is invoked with three arguments: (value, index, array).

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

console.log(
  dropWhile(users, function (o) {
    return !o.active;
  })
); // => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
console.log(dropWhile(users, { user: 'barney', active: false })); // => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
console.log(dropWhile(users, ['active', false])); // => objects for ['pebbles']

// The `_.property` iteratee shorthand.
console.log(dropWhile(users, 'active')); // => objects for ['barney', 'fred', 'pebbles']
