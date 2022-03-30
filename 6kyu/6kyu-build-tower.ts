function towerBuilder(nFloors: N): S[] {
  const arr = [];

  let mountain = '*';
  let emptiness = '';
  let stringToPush = '';

  for (let i = 1; i <= nFloors; i++) {
    for (let j = nFloors - i; j > 0; j--) {
      emptiness += ' ';
    }
    stringToPush += emptiness + mountain + emptiness;
    arr.push(stringToPush);
    stringToPush = '';
    emptiness = '';
    mountain += '**';
  }

  return arr;
}

function towerBuilder1(n: N): S[] {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

console.log(towerBuilder(1), ['*']);
console.log(towerBuilder(2), [' * ', '***']);
console.log(towerBuilder(3), ['  *  ', ' *** ', '*****']);

/*

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/
