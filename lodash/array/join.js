function join(array, separator = ',') {
  let result = '';

  for (let i = 0; i < array.length - 1; i++) {
    result += array[i] + separator;
  }

  return result + array[array.length - 1];
}

console.log(join(['a', 'b', 'c'], '~')); // => 'a~b~c'
console.log(join(['a', 'b', 'c'], '-')); // => 'a-b-c'
console.log(join(['a', 'b', 'c', 'd', 'e', 'f'], '0')); // => 'a0b0c0d0e0f'
