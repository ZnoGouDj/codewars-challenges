// Given a positive integer N, return the 
// largest integer k such that 3^k < N.

// For example,

// largestPower(3) = 0
// largestPower(4) = 1

// You may assume that the input to your function 
// is always a positive integer.

// Test.assertEquals(largestPower(3), 0)
// Test.assertEquals(largestPower(5), 1)
// Test.assertEquals(largestPower(7), 1)
// Test.assertEquals(largestPower(81), 3)
// Test.assertEquals(largestPower(82), 4)

function largestPower(n) {
    for (let i = 0; i < n; i++) {
        if (Math.pow(3, i) >= n) {
            return i - 1;
        }
    }
}