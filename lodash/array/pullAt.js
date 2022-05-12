function pullAt(array, indexes) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (indexes.includes(i)) {
      result.unshift(array[i]);
      array.splice(i, 1);
    }
  }

  return result;
}

var array = ['a', 'b', 'c', 'd'];
var pulled = pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']
