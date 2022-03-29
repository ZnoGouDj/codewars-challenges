/*
Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
*/

function repeatStr(n: number, s: string): string {
  return s.repeat(n);
}

//another me

const repeatStr1 = (n: number, s: string): string => s.repeat(n);

//another

function repeatStr2(n: number, s: string): string {
  let str = '';
  for (let i = 0; i < n; i++) str += s;
  return str;
}
