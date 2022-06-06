function some(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    let el = collection[i];

    switch (typeof predicate) {
      case 'function':
        if (predicate(el)) return true;
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          if (el[predicate[0]] === predicate[1]) return true;
        } else {
          if (JSON.stringify(el).includes(JSON.stringify(predicate).slice(1, -1))) return true;
        }
        break;
      case 'string':
        if (el[predicate]) return true;
        break;
      default:
        return;
    }
  }

  return false;
}

console.log(some([null, 0, 'yes', false], Boolean));
// => true

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
];

// The `_.matches` iteratee shorthand.
console.log(some(users, { user: 'barney', active: false }));
// => false

// The `_.matchesProperty` iteratee shorthand.
console.log(some(users, ['active', false]));
// => true

// The `_.property` iteratee shorthand.
console.log(some(users, 'active'));
// => true
