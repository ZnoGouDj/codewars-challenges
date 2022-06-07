function sortBy(collection, iteratees) {
  let result = [...collection];

  for (let i = 0; i < iteratees.length; i++) {
    let el = iteratees[i];

    switch (typeof el) {
      case 'function':
        result.sort(function (a, b) {
          if (el(a) > el(b)) {
            return 1;
          }
          if (el(b) > el(a)) {
            return -1;
          }
          return 0;
        });
        break;
      case 'string':
        result.sort(function (a, b) {
          if (a[el] > b[el]) {
            return 1;
          }
          if (b[el] > a[el]) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        return;
    }
  }

  return result;
}

// Creates an array of elements, sorted in ascending order by the results of running
// each element in a collection thru each iteratee.

var users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

console.log(
  sortBy(users, [
    function (o) {
      return o.user;
    },
  ])
); // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

console.log(sortBy(users, ['user', 'age'])); // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
