// You have to return the digits of this number within an array in reverse order.

// Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);

function digitize(n: N): N[] {
  return String(n)
    .split('')
    .reverse()
    .map(el => +el);
}
