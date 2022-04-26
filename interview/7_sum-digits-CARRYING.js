/*

sum the digits and log it

example
sum(5)(4)(11)

result log
5
9
20

*/

function sum(n) {
  console.log(n);
  return function (m) {
    return sum(n + m);
  };
}

sum(5);
console.log('-------');
sum(5)(4)(11)(30);
