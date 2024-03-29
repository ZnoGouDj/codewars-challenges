// Your task is to sum the differences between consecutive
// pairs in the array in descending order.

// For example: sumOfDifferences([1, 2, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0.

function sumOfDifferences(arr: number[]): number {
  arr.sort((a, b) => b - a);
  return arr.length > 0 ? arr[0] - arr[arr.length - 1] : 0;
}
//top
function sumOfDifferences1(arr: number[]): number {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
