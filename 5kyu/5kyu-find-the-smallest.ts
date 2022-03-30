function smallest(n: number): number[] {
  let arr = String(n).split('');
  let indexFrom = 0;
  let indexTo = 0;
  let minNum = n;

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      let copy = [...arr];
      let number = copy[i];

      copy.splice(i, 1);
      copy.splice(j, 0, number);

      if (+copy.join('') < minNum || (+copy.join('') === minNum && indexFrom > i)) {
        minNum = +copy.join('');
        indexFrom = i;
        indexTo = j;
      }
    }
  }

  return [minNum, indexFrom, indexTo];
}

console.log(smallest(261235)); // [126235, 2, 0]
console.log(smallest(209917)); // [29917, 0, 1]
console.log(smallest(285365)); // [238565, 3, 1]
console.log(smallest(269045)); // [26945, 3, 0]
console.log(smallest(296837)); // [239687, 4, 1]
