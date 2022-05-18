function takeRightWhile(array, predicate) {
  if (typeof predicate === 'function') {
    for (let i = array.length - 1; i >= 0; i--) {
      if (!predicate(array[i])) {
        return array.slice(i + 1);
      }
    }
  } else if (typeof predicate === 'object') {
    for (let i = array.length - 1; i >= 0; i--) {
      if (Array.isArray(predicate)) {
        if (!JSON.stringify(array[i]).includes(predicate.join('":'))) {
          return array.slice(i + 1);
        }
      } else if (JSON.stringify(array[i]) !== JSON.stringify(predicate)) {
        return array.slice(i + 1);
      }
    }
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      if (!array[i][predicate]) {
        return array.slice(i + 1);
      }
    }
  }
}

// Elements from the end are taken until predicate returns falsey.

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

console.log(
  takeRightWhile(users, function (o) {
    return !o.active;
  })
); // => objects for ['fred', 'pebbles']

// The `_.matches` iteratee shorthand.
console.log(takeRightWhile(users, { user: 'pebbles', active: false })); // => objects for ['pebbles']

// The `_.matchesProperty` iteratee shorthand.
console.log(takeRightWhile(users, ['active', false])); // => objects for ['fred', 'pebbles']

// The `_.property` iteratee shorthand.
console.log(takeRightWhile(users, 'active')); // => []
