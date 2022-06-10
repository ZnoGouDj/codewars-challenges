function gt(value, other) {
  if (typeof value === 'number' && typeof other === 'number') {
    return value > other;
  }
}

console.log(gt(3, 1)); // => true

console.log(gt(3, 3)); // => false

console.log(gt(1, 3)); // => false
