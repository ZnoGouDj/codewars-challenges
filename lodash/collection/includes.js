function includes(collection, value, fromIndex = 0) {
  let valueLength = value.length || 1;

  if (typeof collection === 'object' && !Array.isArray(collection)) {
    for (let key in collection) {
      if (collection[key] === value) {
        return true;
      }
    }
  }

  for (let i = fromIndex; i < collection.length; i++) {
    if (valueLength > 1) {
      let el = collection.slice(i, i + valueLength);
      if (el === value) {
        return true;
      }
    } else {
      if (collection[i] === value) {
        return true;
      }
    }
  }
  return false;
}

console.log(includes([1, 2, 3], 1)); // => true

console.log(includes([1, 2, 3], 1, 2)); // => false

console.log(includes({ a: 1, b: 2 }, 1)); // => true

console.log(includes('abcd', 'bc')); // => true
