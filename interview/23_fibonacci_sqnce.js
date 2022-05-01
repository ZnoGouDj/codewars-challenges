function fibonacci(n) {
  let arr = [1, 1];

  if (n == 1) return [1];
  if (n == 2) return arr;

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

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

const fibonacciMemo = (function () {
  const seq = [1, 1];

  return function (n) {
    console.log('Called with ', n);
    if (seq.length >= n) {
      console.log('No compute');
      return seq.slice(0, n);
    }

    while (seq.length < n) {
      const last = seq[seq.length - 1];
      const prev = seq[seq.length - 2];
      seq.push(last + prev);
      console.log('Pushed: ', seq[seq.length - 1]);
    }
    return seq;
  };
})();

console.log(fibonacciMemo(10)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacciMemo(8));
console.log(fibonacciMemo(12));
