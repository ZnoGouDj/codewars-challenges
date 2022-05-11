function pullAll(array, values) {
  for (let i = 0; i < array.length; i++) {
    if (values.some(el => el === array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

// This method is like _.pull except that it accepts an array of values to remove.

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
