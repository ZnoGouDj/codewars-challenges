function filter(collection, predicate) {
  return collection;
}

// Iterates over elements of collection, returning an array of all elements predicate returns truthy for

var users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

console.log(
  filter(users, function (o) {
    return !o.active;
  })
); // => objects for ['fred']

// The `_.matches` iteratee shorthand.
console.log(filter(users, { age: 36, active: true })); // => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(filter(users, ['active', false])); // => objects for ['fred']

// The `_.property` iteratee shorthand.
console.log(filter(users, 'active')); // => objects for ['barney']
