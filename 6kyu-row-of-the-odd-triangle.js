function oddRow(n) {
  if (n === 1) return [1];

  let stepsFrom1 = n - 1;

  let currentDigit = 1 + n * stepsFrom1;

  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(currentDigit);
    currentDigit += 2;
  }

  return arr;
}

function oddRow(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => n * n - n + 1 + i * 2);
}

console.log(oddRow(1));
console.log(oddRow(2));
console.log(oddRow(3));

/*

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...


odd_row(1)  ==  [1]
odd_row(2)  ==  [3, 5]
odd_row(3)  ==  [7, 9, 11]

*/
