function every(collection, predicate) {
  // 1 case
  if (typeof predicate == 'function') {
    for (let i = 0; i < collection.length; i++) {
      if (!predicate(collection[i])) {
        return false;
      }
    }
  } else if (typeof predicate == 'object') {
    for (let i = 0; i < collection.length; i++) {
      if (Array.isArray(predicate)) {
        if (collection[i][predicate[0]] !== predicate[1]) {
          return false;
        }
      } else if (JSON.stringify(collection[i] !== JSON.stringify(predicate))) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < collection.length; i++) {
      if (!collection[i][predicate]) {
        return false;
      }
    }
  }

  return true;
}

// Checks if predicate returns truthy for all elements of collection.

console.log(every([true, 1, null, 'yes'], Boolean)); // => false

var users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: false },
];

// The `_.matches` iteratee shorthand.
console.log(every(users, { user: 'barney', active: false })); // => false

// The `_.matchesProperty` iteratee shorthand.
console.log(every(users, ['active', false])); // => true

// The `_.property` iteratee shorthand.
console.log(every(users, 'active')); // => false
