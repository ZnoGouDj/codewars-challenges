function shiftedDiff(first, second) {
  let check = first.split('');
  let counter = 0;

  for (let i = 0; i < check.length; i++) {
    if (check.join('') === second) {
      return counter;
    }

    let k = check.pop();
    check.unshift(k);
    counter++;
  }

  return -1;
}

//! ahahaha
function shiftedDiff(first, second) {
  if (first.length != second.length) return -1;
  return (second + second).indexOf(first);
}

console.log(shiftedDiff('eecoff', 'coffee')); // 4
console.log(shiftedDiff('Moose', 'moose')); // -1
console.log(shiftedDiff("isn't", "'tisn")); // 2
console.log(shiftedDiff('Esham', 'Esham')); // 0
console.log(shiftedDiff(' ', ' ')); // 0
console.log(shiftedDiff('hoop', 'pooh')); // -1
console.log(shiftedDiff('  ', ' ')); // -1
