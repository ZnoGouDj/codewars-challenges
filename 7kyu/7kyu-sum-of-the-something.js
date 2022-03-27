function SeriesSum(n) {
  if (n === 0) return '0.00';
  let sum = 1;
  let divider = 4;

  for (let i = 1; i < n; i++) {
    sum += 1 / divider;
    divider += 3;
  }

  return sum.toFixed(2);
}

console.log(SeriesSum(1)); // "1.00"
console.log(SeriesSum(2)); // "1.25"
console.log(SeriesSum(3)); // "1.39"
console.log(SeriesSum(4)); // "1.49"
