function partition(collection, predicate) {
  let truthyElements = [];
  let falsyElements = [];

  for (let i = 0; i < collection.length; i++) {
    let el = collection[i];

    switch (typeof predicate) {
      case 'function':
        predicate(el) ? truthyElements.push(el) : falsyElements.push(el);
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          el[predicate[0]] === predicate[1] ? truthyElements.push(el) : falsyElements.push(el);
        } else {
          JSON.stringify(el).includes(JSON.stringify(predicate).slice(1, -1))
            ? truthyElements.push(el)
            : falsyElements.push(el);
        }
        break;
      case 'string':
        el[predicate] ? truthyElements.push(el) : falsyElements.push(el);
        break;
      default:
        return;
    }
  }

  return [truthyElements, falsyElements];
}

var users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false },
];

console.log(
  partition(users, function (o) {
    return o.active;
  })
);
// => objects for [['fred'], ['barney', 'pebbles']]

// The `_.matches` iteratee shorthand.
console.log(partition(users, { age: 1, active: false }));
// => objects for [['pebbles'], ['barney', 'fred']]

// The `_.matchesProperty` iteratee shorthand.
console.log(partition(users, ['active', false]));
// => objects for [['barney', 'pebbles'], ['fred']]

// The `_.property` iteratee shorthand.
console.log(partition(users, 'active'));
// => objects for [['fred'], ['barney', 'pebbles']]
