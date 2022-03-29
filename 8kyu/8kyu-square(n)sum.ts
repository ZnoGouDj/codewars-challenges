/*
Complete the square sum function so that it squares each 
number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

Test.assertEquals(squareSum([1,2]), 5)
Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
*/

function squareSum(numbers: number[]): number {
  let sum = numbers.reduce(function (acc, num) {
    return acc + Math.pow(num, 2);
  }, 0);
  return sum;
}
//another
function squareSum1(numbers: number[]): number {
  return numbers.reduce((a, b) => a + Math.pow(b, 2), 0);
}
