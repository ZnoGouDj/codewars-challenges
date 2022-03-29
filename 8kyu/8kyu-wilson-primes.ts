/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

Test.assertEquals(amIWilson(5), true)
Test.assertEquals(amIWilson(9), false)
Test.assertEquals(amIWilson(6), false)
*/
function factorial(n: number): number {
  return n != 1 ? n * factorial(n - 1) : 1;
}
function amIWilson(p: number): boolean {
  return ((factorial(p - 1) + 1) / (p * p)) % 1 === 0;
}

//top

function amIWilson1(p: number): boolean {
  function fact(x: number): number {
    return x <= 1 ? 1 : x * fact(x - 1);
  }

  return ((fact(p - 1) + 1) / (p * p)) % 1 === 0;
}

//shortest top2

const amIWilson2 = (p: number): boolean => [5, 13, 563].indexOf(p) > -1;
