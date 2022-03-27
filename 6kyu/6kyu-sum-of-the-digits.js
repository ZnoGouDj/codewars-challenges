function digital_root(n) {
  let sum = n
    .toString()
    .split('')
    .map(el => +el)
    .reduce((a, b) => a + b);

  return sum > 9 ? digital_root(sum) : sum;
}

//!

function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split('')
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

//?

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

/*

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

console.log(digital_root(16)); // 7
console.log(digital_root(456)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(493193)); // 2
