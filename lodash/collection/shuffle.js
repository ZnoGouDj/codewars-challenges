function shuffle(collection) {
  let result = Array.isArray(collection) ? [] : {};
  let keys = Object.keys(collection);
  let n = keys.length;

  while (n > 0) {
    let rnd = keys[Math.floor(Math.random() * keys.length)];
    if (Array.isArray(collection)) {
      if (collection[rnd] !== undefined) {
        result.push(collection[rnd]);
        delete collection[rnd];
        n--;
      }
    } else {
      if (collection[rnd]) {
        result[rnd] = collection[rnd];
        delete collection[rnd];
        n--;
      }
    }
  }

  return result;
}

console.log(shuffle([1, 2, 3, 4])); // => [4, 1, 3, 2]
console.log(shuffle({ John: 32, Mary: 28, Jane: 54 }));
