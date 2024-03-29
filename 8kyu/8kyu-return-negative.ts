// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Test.assertEquals(makeNegative(42), -42);

function makeNegative(num: number): number {
  return num <= 0 ? num : -num;
}

const makeNegative1 = (num: number): number => (num <= 0 ? num : -num);

//top
function makeNegative2(num: number): number {
  return -Math.abs(num);
}
