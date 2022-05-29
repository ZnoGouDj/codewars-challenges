function find(collection, predicate, fromIndex = 0) {
  for (let i = fromIndex; i < collection.length; i++) {
    switch (typeof predicate) {
      case 'function':
        if (predicate(collection[i])) {
          return collection[i];
        }
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          if (collection[i][predicate[0]] === predicate[1]) {
            return collection[i];
          }
        } else {
          if (JSON.stringify(collection[i]).includes(JSON.stringify(predicate).slice(1, -1))) {
            return collection[i];
          }
        }
        break;
      default:
        if (collection[i][predicate]) {
          return collection[i];
        }
        break;
    }
  }
}

var users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

console.log(
  find(users, function (o) {
    return o.age < 40;
  })
); // => object for 'barney'

// The `_.matches` iteratee shorthand.
console.log(find(users, { age: 1, active: true })); // => object for 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
console.log(find(users, ['active', false])); // => object for 'fred'

// The `_.property` iteratee shorthand.
console.log(find(users, 'active')); // => object for 'barney'
