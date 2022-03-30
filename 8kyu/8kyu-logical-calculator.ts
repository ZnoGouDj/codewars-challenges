/*
Your task is to calculate logical value of boolean array. 
Test arrays are one-dimensional and their size is in the range 1-50.

Links referring to logical operations: AND, OR and XOR.
You should begin at the first value, and repeatedly apply the 
logical operation across the remaining elements in the array sequentially.

First Example:
Input: true, true, false, operator: AND
Steps: true AND true -> true, true AND false -> false
Output: false

Second Example:
Input: true, true, false, operator: OR
Steps: true OR true -> true, true OR false -> true
Output: true

Third Example:
Input: true, true, false, operator: XOR
Steps: true XOR true -> false, false XOR false -> false
Output: false

Input:
boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.

Output:
calculated boolean

Test.assertEquals(logicalCalc([true, true, true, false], "AND"), false);
Test.assertEquals(logicalCalc([true, true, true, false], "OR"), true);
Test.assertEquals(logicalCalc([true, true, true, false], "XOR"), true);
Test.assertEquals(logicalCalc([true, true, false, false], "AND"), false);
*/

//unfinished

function logicalCalc(array: boolean[], op: string): boolean {
  switch (op) {
    case 'AND':
      for (let i = 0; i < array.length; i++) {}
      break;
    case 'OR':
      break;
    case 'XOR':
      break;
  }

  return;
}

//top
type T = boolean;
var ops = {
  AND: (a: T, b: T): T => a && b,
  OR: (a: T, b: T): T => a || b,
  XOR: (a: T, b: T): T => a !== b,
};

function logicalCalc1(array: boolean[], op: string): boolean {
  return array.reduce(ops[op]);
}

//top 2

function logicalCalc2(array: boolean[], op: string): boolean {
  var result = array[0];
  for (var i = 1; i < array.length; i++) {
    if (op == 'AND') {
      result = result && array[i];
    }
    if (op == 'OR') {
      result = result || array[i];
    }
    if (op == 'XOR') {
      result = result != array[i];
    }
  }
  return result;
}

//stole

function andCalc(array: boolean[]): boolean {
  //confirm all are the same
  if (array.every((x: boolean) => x === true) || array.every(x => x === false)) {
    return array[0];
  } else {
    return false;
  }
}
//OR
function orCalc(array: boolean[]): boolean {
  //if prev and curr are the same, return first
  //if prev and curr are not the same, return true
  return array.reduce((x, y, z) => {
    return x === y ? x : true;
  });
}
//XOR
function xorCalc(array: boolean[]): boolean {
  return array.reduce((x, y, z) => x !== y);
}
function logicalCalc3(array: boolean[], op: string): boolean {
  if (op === 'AND') {
    return andCalc(array);
  } else if (op === 'OR') {
    return orCalc(array);
  } else if (op === 'XOR') {
    return xorCalc(array);
  }
}
logicalCalc([true, true, false, false], 'OR');
