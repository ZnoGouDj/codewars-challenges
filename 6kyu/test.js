const step = (g, m, n) => {
  for (let i = m; i <= n; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }
};

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

console.log(step(2, 100, 110)); // [101, 103]
console.log(step(4, 100, 110)); // [103, 107]
console.log(step(6, 100, 110)); // [101, 107]
console.log(step(8, 300, 400)); // [359, 367]
console.log(step(10, 300, 400)); // [307, 317]
