function pull(array, ...values) {
  for (let i = 0; i < array.length; i++) {
    if (values.some(el => el === array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

// mutates array

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
