function sampleSize(collection, n = 1) {
  let result = [];
  let keys = Object.keys(collection);
  if (n > keys.length) n = keys.length;

  while (n > 0) {
    let rnd = keys[Math.floor(Math.random() * keys.length)];
    if (collection[rnd] !== undefined) {
      result.push(collection[rnd]);
      delete collection[rnd];
      n--;
    }
  }

  return result;
}

console.log(sampleSize([1, 2, 3], 2)); // => [3, 1]

console.log(sampleSize([1, 2, 3], 4)); // => [2, 3, 1]

console.log(sampleSize({ John: 32, Mary: 28, Jane: 54 }, 2));
