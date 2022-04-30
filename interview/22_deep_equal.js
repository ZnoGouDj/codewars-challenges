function deepEqual(a, b) {
  // todo
}

const source = { a: 1, b: { c: 1 } };
const test1 = { a: 1, b: { c: 1 } };
const test2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(source, test1)); // -> true
console.log(deepEqual(source, test2)); // -> false
console.log(deepEqual(NaN, NaN)); // -> true
console.log(deepEqual('test', 'test!')); // -> false
console.log(deepEqual()); // -> true
