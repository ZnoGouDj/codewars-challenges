// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Test.assertEquals(tidyNumber(12),true);
// Test.assertEquals(tidyNumber(102),false);
// Test.assertEquals(tidyNumber(9672),false);
// Test.assertEquals(tidyNumber(2789),true);
// Test.assertEquals(tidyNumber(2335),true);

function tidyNumber(n: N): boolean {
  let numberDivide = String(n).split('');
  let counter = 0;
  for (let i = 0; i < numberDivide.length - 1; i++) {
    if (numberDivide[i] <= numberDivide[i + 1]) {
      counter += 0;
    } else {
      counter++;
    }
  }
  return counter === 0;
}

//top
function tidyNumber1(n: N): boolean {
  return +[...(n + '')].sort().join(``) == n;
}
