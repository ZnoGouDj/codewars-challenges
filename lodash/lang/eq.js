function eq(value, other) {
  if (typeof value !== typeof other) {
    return false;
  }
  if (typeof value === 'number') {
    if (isNaN(value) && isNaN(other)) return true;
    else if (value === +0 && other === -0) return true;
    else if (value === -0 && other === +0) return true;
    else if (value === other) return true;
    else return false;
  }
  if (typeof value !== 'number' && typeof other === typeof value) {
    if (typeof value === 'undefined') return true;
    else if (typeof value === 'null') return true;
    else if (typeof value === 'string') {
      if (value === other) return true;
    } else if (typeof value === 'boolean') {
      if (value === other) return true;
    }
  }
  if (typeof value === 'object') {
    return value === other;
  }
}

var object = { a: 1 };
var other = { a: 1 };

console.log(eq(object, object)); // => true

console.log(eq(object, other)); // => false

console.log(eq('a', 'a')); // => true

console.log(eq('a', Object('a'))); // => false

console.log(eq(NaN, NaN)); // => true
