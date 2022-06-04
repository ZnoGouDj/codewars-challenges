function orderBy(collection, iteratees, orders) {
  for (let i = iteratees.length - 1; i >= 0; i--) {
    let type = collection[i][iteratees[i]];
    let el = iteratees[i];

    if (!orders[i] || orders[i] === 'asc') {
      // 0123
      if (typeof type === 'string') {
        collection.sort((a, b) => a[el].localeCompare(b[el]));
      } else if (typeof type === 'number') {
        collection.sort((a, b) => a[el] - b[el]);
      }
    } else if (orders[i] === 'desc') {
      // 3210
      if (typeof type === 'string') {
        collection.sort((a, b) => b[el].localeCompare(a[el]));
      } else if (typeof type === 'number') {
        collection.sort((a, b) => b[el] - a[el]);
      }
    }
  }

  return collection;
}

var users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 },
];

// Sort by `user` in ascending order and by `age` in descending order.
console.log(orderBy(users, ['user', 'age'], ['asc', 'desc'])); // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

// This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by.
// If orders is unspecified, all values are sorted in ascending order.Otherwise, specify an order of "desc"
// for descending or "asc" for ascending sort order of corresponding values.
