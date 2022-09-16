function unluckyDays(year) {
  let date = new Date(String(year));

  let count = 0;

  for (let i = 0; i < 12; i++) {
    date.setDate(13);
    if (date.getDay() === 5) count++;
    date.setMonth(date.getMonth() + 1);
  }

  return count;
}

//!

function unluckyDays1(year) {
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      unlucky++;
    }
  }
  return unlucky;
}

console.log(unluckyDays(1586)); // => 1
console.log(unluckyDays(1001)); // => 3
console.log(unluckyDays(2819)); // => 2
console.log(unluckyDays(2792)); // => 2
console.log(unluckyDays(2723)); // => 2
console.log(unluckyDays(1909)); // => 1
console.log(unluckyDays(1812)); // => 2
console.log(unluckyDays(1618)); // => 2
console.log(unluckyDays(2132)); // => 1
console.log(unluckyDays(2065)); // => 3
console.log(unluckyDays(2467)); // => 1
console.log(unluckyDays(1678)); // => 1
console.log(unluckyDays(1605)); // => 1
console.log(unluckyDays(2822)); // => 1
console.log(unluckyDays(2321)); // => 1
