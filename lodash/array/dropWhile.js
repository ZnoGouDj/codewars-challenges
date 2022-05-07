function dropWhile(array, predicate) {
  let counter = 0;

  if (typeof predicate === 'function') {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        counter++;
      } else {
        break;
      }
    }
  } else if (typeof predicate === 'object') {
    let resultLocal = [...array].map(el => JSON.stringify(el));
    let predicateLocal = Array.isArray(predicate) ? predicate.join('":') : JSON.stringify(predicate);

    for (let i = 0; i < resultLocal.length; i++) {
      if (resultLocal[i].includes(predicateLocal)) {
        counter++;
      } else {
        break;
      }
    }
  }

  return array.slice(counter, array.length);
}

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
