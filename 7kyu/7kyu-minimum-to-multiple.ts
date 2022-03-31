// Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

// minimum(9, 8, Result) % Result = 1

// % 9-1 = 8 which is a multiple of 4
// minimum(10, 6, Result)  % Result = 2

// % 10+2 = 12 which is a multiple of 6
// Note
// 0 is always a multiple of x
// Constraints
// 1 <= a <= 106

// 1 <= x <= 105

function minimum(a: N, x: N): N {
  if (a === x) {
    return 0;
  }
  for (let i = 0; i <= a; i++) {
    if ((a + i) % x === 0 || (a - i) % x === 0) {
      return i;
    }
  }
}

//top
const minimum1 = (a: N, x: N): N => Math.min(x - (a % x), a % x);
