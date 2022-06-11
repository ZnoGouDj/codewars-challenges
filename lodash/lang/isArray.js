function isArray(value) {
  return Array.isArray(value);
}

console.log(isArray([1, 2, 3])); // => true

// console.log(isArray(document.body.children)); // => false

console.log(isArray('abc')); // => false

// console.log(isArray(_.noop)); // => false
