function reject(collection, predicate) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    let el = collection[i];

    switch (typeof predicate) {
      case 'function':
        if (!predicate(el)) result.push(el);
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          if (el[predicate[0]] !== predicate[1]) {
            result.push(el);
          }
        } else {
          if (!JSON.stringify(el).includes(JSON.stringify(predicate).slice(1, -1))) {
            result.push(el);
          }
        }
        break;
      case 'string':
        if (!el[predicate]) result.push(el);
        break;
      default:
        return;
    }
  }

  return result;
}

var users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
];

console.log(
  reject(users, function (o) {
    return !o.active;
  })
); // => objects for ['fred']

// The `_.matches` iteratee shorthand.
console.log(reject(users, { age: 40, active: true })); // => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(reject(users, ['active', false])); // => objects for ['fred']

// The `_.property` iteratee shorthand.
console.log(reject(users, 'active')); // => objects for ['barney']
