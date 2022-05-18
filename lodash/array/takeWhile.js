function takeWhile(array, predicate) {
  if (typeof predicate === 'function') {
    for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i])) {
        return array.slice(0, i);
      }
    }
  }
  if (typeof predicate === 'object' && !Array.isArray(predicate)) {
    for (let i = 0; i < array.length; i++) {
      if (JSON.stringify(array[i]) !== JSON.stringify(predicate)) {
        return array.slice(0, i);
      }
    }
  }
  if (typeof predicate === 'object' && Array.isArray(predicate)) {
    for (let i = 0; i < array.length; i++) {
      if (!JSON.stringify(array[i]).includes(predicate.join('":'))) {
        return array.slice(0, i);
      }
    }
  }
  if (typeof predicate === 'string') {
    for (let i = 0; i < array.length; i++) {
      if (!array[i][predicate]) {
        return array.slice(0, i);
      }
    }
  }
}

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

console.log(
  takeWhile(users, function (o) {
    return !o.active;
  })
); // => objects for ['barney', 'fred']

// The `_.matches` iteratee shorthand.
console.log(takeWhile(users, { user: 'barney', active: false })); // => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(takeWhile(users, ['active', false])); // => objects for ['barney', 'fred']

// The `_.property` iteratee shorthand.
console.log(takeWhile(users, 'active')); // => []
