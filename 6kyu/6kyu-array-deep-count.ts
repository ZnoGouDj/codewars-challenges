function deepCount(a) {
  let length = 0;

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) length += deepCount(a[i]);
    length++;
  }

  return length;
}

console.log(deepCount([])); // => 0
console.log(deepCount([1, 2, 3])); // => 3
console.log(deepCount(['x', 'y', ['z']])); // => 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // => 7
console.log(deepCount([[[[[[[[[]]]]]]]]])); // => 8
