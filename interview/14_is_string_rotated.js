function isStringRotated(source, test) {
  if (source.length != test.length) return false;

  let obj = {};

  for (let i = 0; i < source.length; i++) {
    if (!obj[source[i]]) {
      obj[source[i]] = 1;
    } else {
      obj[source[i]]++;
    }
  }

  for (let i = 0; i < test.length; i++) {
    if (!obj[test[i]]) return false;
    else {
      obj[test[i]]--;
    }
  }

  return !Object.values(obj).some(el => el > 0);
} //thought that string position can be random

function isStringRotated1(source, test) {
  // if (source.length !== test.length) {
  //   return false
  // }
  //
  // for (let i = 0; i < source.length; i++) {
  //   const rotate = source.slice(i, source.length) + source.slice(0, i)
  //
  //   if (rotate === test) {
  //     return true
  //   }
  // }
  //
  // return false
  return source.length === test.length && (source + source).includes(test);
}

console.log(isStringRotated('javascript', 'scriptjava')); // -> true
console.log(isStringRotated('javascript', 'iptjavascr')); // -> true
console.log(isStringRotated('javascript', 'java')); // -> false
