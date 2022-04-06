function rank(st, we, n) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const result = [];

  const arr = st.split(',');
  const obj = [];

  for (let i = 0; i < arr.length; i++) {}

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    let temp = arr[i].toLowerCase().split('');
    for (let j = 0; j < temp.length; j++) {
      counter += alphabet.indexOf(temp[j]) + 1;
    }
    obj[i] = { name: arr[i], value: (counter + arr[i].length) * we[i] };
    counter = 0;
  }

  obj.sort(function (a, b) {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    if (a.value === b.value) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  return obj[n - 1]['name'];
}

// console.log(rank('COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH', [1, 4, 4, 5, 2, 1], 4)); // "Paul"
// console.log(rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4)); // "Benjamin"
// console.log(rank('Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden', [1, 3, 5, 5, 3, 6], 2)); // "Matthew"
console.log(rank('Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth', [3, 1, 4, 4, 3, 2], 4)); // "Abigail"
// console.log(rank('Lagon,Lily', [1, 5], 2)); // "Lagon"
