function blabla(number) {
  let numbers = String(number).split('');
  let minimal;
  let numberOneMinimal;

  for (let i = 0; i < numbers.length; i++) {
    let start = i - numbers[i] < 0 ? 0 : i - numbers[i];
    let end = i + +numbers[i];

    let view = numbers.slice(start, end);
    view.splice(i, 1);

    let sum = view.reduce((acc, val) => acc + +val, 0) - numbers[i];

    if (!minimal) {
      minimal = sum;
    } else if (minimal > sum) {
      minimal = sum;
    }

    if (numbers[i] == 1) {
      numberOneMinimal = sum;
    }
  }

  return [minimal, numberOneMinimal];
}
// check if number 1 with this range has lowest sum possible
/*
3 => 4 + 3 + 1 = 8
4 => 3 + 3 + 1 + 5 = 12
3 => 3 + 4 + 1 + 5 = 13
1 => 3 + 5 = 8 -- number 1 creates the smallest sum => true
5 => 3 + 4 + 3 + 1 = 11

1 => 2 -- number 1 creates the smallest sum => true
2 => 1 + 3 + 4 = 8
3 => 1 + 2 + 4 + 5 = 12
4 => 1 + 2 + 3 + 5 = 11
5 => 1 + 2 + 3 + 4 = 10
*/

console.log(blabla(34315)); // true
console.log(blabla(12345)); // true
