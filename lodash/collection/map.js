function map(collection, iteratee) {
  let result = [];

  for (let key in collection) {
    if (typeof iteratee === 'function') {
      result.push(iteratee(collection[key]));
    } else if (typeof iteratee === 'string') {
      result.push(collection[key][iteratee]);
    }
  }

  return result;
}

function square(n) {
  return n * n;
}

console.log(map([4, 8], square)); // => [16, 64]

console.log(map({ a: 4, b: 8 }, square)); // => [16, 64] (iteration order is not guaranteed)

var users = [{ user: 'barney' }, { user: 'fred' }];

// The `_.property` iteratee shorthand.
console.log(map(users, 'user')); // => ['barney', 'fred']
