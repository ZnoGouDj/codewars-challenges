function nthFibo(n) {
  let arr = [0, 1, 1];

  for (let i = 0; i < n - 3; i++) {
    arr.push(Number(arr.slice(-1)) + Number(arr.slice(-2)[0]));
  }

  return arr[n - 1];
}

function nthFibo1(n) {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
}

console.log(nthFibo(4)); // 2 (cause 2 is the 4th num in fibo)
