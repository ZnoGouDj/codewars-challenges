const stockList = (listOfArt, listOfCat) => {
  const obj = listOfCat.reduce((a, v) => ({ ...a, [v]: 0 }), {}); // { A: 0, B: 0, C: 0, D: 0 }

  for (let i = 0; i < listOfArt.length; i++) {
    obj[listOfArt[i][0]] += +listOfArt[i].split(' ')[1];
  }

  let str = '';

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      str += `(${key} : ${obj[key]}) - `;
    }
  }

  return str.substring(0, str.length - 3);
};

console.log(stockList(['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B', 'C', 'D'])); // "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
