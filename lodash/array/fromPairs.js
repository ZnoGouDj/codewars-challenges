function fromPairs(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}

// The inverse of _.toPairs; this method returns an object composed from key-value pairs.

console.log(
  fromPairs([
    ['a', 1],
    ['b', 2],
  ])
); // => { 'a': 1, 'b': 2 }
