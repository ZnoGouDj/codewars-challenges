function arraySubset(source, subset) {
  if (subset.length > source.length) return false;

  let obj = {};

  for (let i = 0; i < subset.length; i++) {
    if (obj.hasOwnProperty(subset[i])) {
      obj[subset[i]]++;
    } else {
      obj[subset[i]] = 1;
    }
  }

  for (let i = 0; i < source.length; i++) {
    if (obj.hasOwnProperty(source[i])) {
      obj[source[i]]--;
    }
  }

  return !Object.values(obj).some(el => el > 0);
}

// есть ли элементы второго массива в первом.

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false

function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false;
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);
    if (index === -1) {
      return false;
    }
    delete source[index];
  }
  return true;
}
