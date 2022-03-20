function smallest(n) {
  let arr = String(n).split('');
  let replacedNumIndex;
  let replacedPosition = 0;
  let arrayToReturn;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i && j !== 0) {
        replacedNumIndex = j;
        let array0 = [...arr];
        array0.splice(j, 1);
        array0.unshift(arr[j]);
        let array1 = [...arr];
        array1.splice(j, 1);
        array1.splice(1, 0, arr[j]);
        if (array0 > array1) {
          replacedPosition = 1;
          arrayToReturn = array1.join('');
        } else {
          arrayToReturn = array0.join('');
        }

        return [arrayToReturn, replacedNumIndex, replacedPosition];
      }
    }
  }
}

console.log(smallest(261235)); // [126235, 2, 0]
console.log(smallest(209917)); // [29917, 0, 1]
console.log(smallest(285365)); // [238565, 3, 1]
console.log(smallest(269045)); // [26945, 3, 0]
console.log(smallest(296837)); // [239687, 4, 1]
