function findOdd(A: number[]): number {
  if (A.length === 1) return A[0];

  let arr = [...A].sort((a, b) => a - b);

  let currentDigit = arr[0];
  let matchQty = 1;

  for (let i = 1; i < arr.length; i++) {
    if (currentDigit === arr[i]) {
      matchQty++;
    } else if (matchQty % 2 !== 0) {
      return currentDigit;
    } else {
      currentDigit = arr[i];
      matchQty = 1;
    }
  }
  return currentDigit;
}

//lol
const findOdd1 = (xs: number[]): number => xs.reduce((a, b) => a ^ b);

//
function findOdd2(A: number[]): number {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (let prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
