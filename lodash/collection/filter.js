// function filter(collection, predicate) {
//   let result = [];

//   if (typeof predicate === 'function') {
//     for (let i = 0; i < collection.length; i++) {
//       if (predicate(collection[i])) {
//         result.push(collection[i]);
//       }
//     }
//   } else if (typeof predicate === 'object') {
//     if (Array.isArray(predicate)) {
//       for (let i = 0; i < collection.length; i++) {
//         if (collection[i][predicate[0]] === predicate[1]) {
//           result.push(collection[i]);
//         }
//       }
//     } else {
//       for (let i = 0; i < collection.length; i++) {
//         if (JSON.stringify(collection[i]).includes(JSON.stringify(predicate).replace('}', '').replace('{', ''))) {
//           result.push(collection[i]);
//         }
//       }
//     }
//   } else {
//     for (let i = 0; i < collection.length; i++) {
//       if (collection[i][predicate]) {
//         result.push(collection[i]);
//       }
//     }
//   }

//   return result;
// }

function filter(collection, predicate) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    switch (typeof predicate) {
      case 'function':
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          if (collection[i][predicate[0]] === predicate[1]) {
            result.push(collection[i]);
          }
        } else {
          if (JSON.stringify(collection[i]).includes(JSON.stringify(predicate).slice(1, -1))) {
            result.push(collection[i]);
          }
        }
        break;
      default:
        if (collection[i][predicate]) {
          result.push(collection[i]);
        }
        break;
    }
  }

  return result;
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
