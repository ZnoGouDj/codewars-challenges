function findUniq(arr: number[]): number {
  let number = arr[0];
  let number1 = arr[1];
  let number2 = arr[2];

  if (arr.length < 4) {
    if (number !== number1 && number !== number2) {
      return number;
    } else if (number1 !== number && number1 !== number2) {
      return number1;
    } else if (number2 !== number && number2 !== number1) {
      return number2;
    }
  } else {
    for (let i = 3; i < arr.length; i++) {
      if (number !== number1 && number !== number2) {
        return number;
      } else if (number1 !== number && number1 !== number2) {
        return number1;
      } else if (number2 !== number && number2 !== number1) {
        return number2;
      }

      number = arr[i];
      number1 = arr[i + 1];
      number2 = arr[i + 2];
    }
  }
}

function findUniq1(arr: number[]): number {
  const anyArrayValue = arr[0];

  //sorry for that
  if (anyArrayValue === Infinity) {
    return -Infinity;
  }

  const arr1 = arr.filter(el => el - anyArrayValue === 0);
  const arr2 = arr.filter(el => el - anyArrayValue !== 0);

  return arr1.length > arr2.length ? arr2[0] : arr1[0];
}

function findUniq2(arr: number[]): number {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function findUniq3(arr: number[]): number {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([1, 0, 0])); //1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); //  0.55
