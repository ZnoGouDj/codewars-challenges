function reduceRight(collection, iteratee, accumulator) {
  let result = accumulator;

  if (Array.isArray(collection)) {
    for (let i = collection.length - 1; i >= 0; i--) {
      result = iteratee(result, collection[i]);
    }
  } else {
    let reverseCollection = collection.reverse();
    for (let key in reverseCollection) {
      result = iteratee(result, collection[key], key);
    }
  }

  return result;
}

var array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

console.log(
  reduceRight(
    array,
    function (flattened, other) {
      return flattened.concat(other);
    },
    []
  )
);
// => [4, 5, 2, 3, 0, 1]
