// Given an array of integers.

// Return an array, where the first element is the count of
// positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), you should return [10, -65].

function countPositivesSumNegatives(input: N[]): N[] {
  if (input == null || input.length == 0) {
    return [];
  }
  let positives = input.filter(num => num > 0);
  let negatives = input.filter(num => num < 0);
  let sum = negatives.reduce((a, b) => a + b);
  let arr = [positives.length];
  arr.push(sum);
  return arr;
}
