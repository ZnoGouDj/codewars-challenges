function suffixSums(a: number[]): number[] {
  const b = [];

  const array = [...a];
  array.reverse();

  for (let i = 0; i < a.length; i++) {
    b.push(array.reduceRight((previousValue, currentValue) => previousValue + currentValue, 0));
    array.pop();
  }

  return b;
}

/*
b[0] = a[0] + a[1] + ... + a[n - 2] + a[n - 1]
b[1] =        a[1] + ... + a[n - 2] + a[n - 1]
...
b[n - 2] =                 a[n - 2] + a[n - 1]
b[n - 1] =                            a[n - 1]
*/

console.log(suffixSums([1, 2, 3])); // [6, 5, 3]

console.log(suffixSums([1, 2, 3, -6])); // [0, -1, -3, -6]

console.log(suffixSums([0, 0, 0])); // [0, 0, 0]

console.log(suffixSums([1, 123, 23])); // [147, 146, 23]
