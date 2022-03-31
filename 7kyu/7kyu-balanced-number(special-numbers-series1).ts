// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
// Task
// Given a number, Find if it is Balanced or not .

// Test.assertEquals(balancedNum(1024), "Not Balanced")
// Test.assertEquals(balancedNum(66545), "Not Balanced")
// Test.assertEquals(balancedNum(295591), "Not Balanced")
// Test.assertEquals(balancedNum(1230987), "Not Balanced")
// Test.assertEquals(balancedNum(56239814), "Balanced")

function balancedNum(number: number): string {
  let arr = String(number).split('');
  if (arr.length % 2 === 0) {
    arr.splice(arr.length / 2 - 1, 2);
  } else {
    arr.splice(arr.length / 2, 1);
  }

  let counter = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    counter += Number(arr[i]);
  }
  for (let i = arr.length / 2; i < arr.length; i++) {
    counter -= Number(arr[i]);
  }
  return counter === 0 ? 'Balanced' : 'Not Balanced';
}

//top

function balancedNum1(number: number): string {
  let str = String(number);
  let len = (str.length - (str.length % 2 ? -1 : -2)) / 2;
  let sum = (digits: any) => [...digits].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len)) ? 'Balanced' : 'Not Balanced';
}
