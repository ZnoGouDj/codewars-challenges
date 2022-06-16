function digPow(n, p) {
  let sum = [...String(n)].reduce((acc, val, index) => acc + Math.pow(val, index + p), 0);
  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(89, 1)); // => 1
console.log(digPow(92, 1)); // => -1
console.log(digPow(46288, 3)); // => 51
