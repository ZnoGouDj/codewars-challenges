function isArrayLikeObject(value: any): Boolean {
  return (
    value &&
    typeof value !== 'function' &&
    typeof value === 'object' &&
    value.length >= 0 &&
    value.length <= Number.MAX_SAFE_INTEGER
  );
}

console.log(isArrayLikeObject([1, 2, 3])); // => true

console.log(isArrayLikeObject('abc')); // => false
