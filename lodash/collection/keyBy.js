function keyBy(collection, iteratee) {
  let result = {};

  for (let i = 0; i < collection.length; i++) {
    if (typeof iteratee === 'function') {
      if (!result[iteratee(collection[i])]) {
        result[iteratee(collection[i])] = collection[i];
      }
    } else if (typeof iteratee === 'string') {
      if (!result[collection[i][iteratee]]) {
        result[collection[i][iteratee]] = collection[i];
      }
    }
  }

  return result;
}

var array = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 },
];

console.log(
  keyBy(array, function (o) {
    return String.fromCharCode(o.code);
  })
);
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

console.log(keyBy(array, 'dir'));
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
