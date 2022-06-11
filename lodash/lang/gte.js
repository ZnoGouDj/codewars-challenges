function gte(value, other) {
  if (typeof value === 'number' && typeof other === 'number') {
    return value >= other;
  }
}

console.log(gte(3, 1)); // => true

console.log(gte(3, 3)); // => true

console.log(gte(1, 3)); // => false
