/*

sum the digits and log it

example
sum(5)(4)(11)

result log
5
9
20

*/

function sum(n = 0) {
  console.log(n);
  return function (m = 0) {
    return sum(n + m);
  };
}

sum(5);
sum(5)(4)(11)(30);
