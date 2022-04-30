function fibonacci(n) {
  let arr = [1, 1];

  if (n == 1) return [1];
  if (n == 2) return arr;

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]

function fibonacci(n) {
  const sequence = [1, 1];

  if (n < 2) {
    return sequence.slice(0, n);
  }

  while (sequence.length < n) {
    const last = sequence[sequence.length - 1];
    const prev = sequence[sequence.length - 2];
    sequence.push(last + prev);
  }

  return sequence;
}
