function calculateYears(principal, interest, tax, desired) {
  let sum = principal;
  let years = 0;

  while (sum < desired) {
    let annualInterest = sum * interest;
    let annualTax = sum * interest * tax;
    sum += annualInterest;
    sum -= annualTax;
    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0

console.log(calculateYears(3397405, 0.05, 0.08, 4653812)); // 7
console.log(calculateYears(455953, 0.07, 0.06, 1042605)); // 13

/*

1000*0.05
50

50*0.18
9

= 41

After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30

*/
