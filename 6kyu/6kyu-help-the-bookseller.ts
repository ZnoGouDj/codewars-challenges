export class G964 {
  public static stockList = (listOfArt: string[], listOfCat: string[]): string => {
    if (!listOfArt.length || !listOfCat.length) return '';

    const obj = listOfCat.reduce((a, v) => ({ ...a, [v]: 0 }), {});

    for (let i = 0; i < listOfArt.length; i++) {
      if (obj.hasOwnProperty(listOfArt[i][0])) {
        obj[listOfArt[i][0]] += +listOfArt[i].split(' ')[1];
      }
    }

    let str = '';

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        str += `(${key} : ${obj[key]}) - `;
      }
    }

    return str.substring(0, str.length - 3);
  };
}

export class G9641 {
  public static stockList = (listOfArt, listOfCat) => {
    if (!listOfArt.length || !listOfCat.length) return '';
    var count = listOfArt.reduce(function (cat, art) {
      cat[art[0]] = ~~cat[art[0]] + +art.split(' ')[1];
      return cat;
    }, {});
    return listOfCat
      .map(function (cat) {
        return '(' + cat + ' : ' + (count[cat] || 0) + ')';
      })
      .join(' - ');
  };
}

//! nice

export class BEST {
  public static stockList = (listOfArt: string[], listOfCat: string[]) => {
    if (listOfArt.length === 0) return '';

    const books: { [k: string]: number } = {};
    listOfCat.forEach(category => (books[category] = 0));

    listOfArt.forEach(i => {
      let [category, quantity] = i.split(' ');
      books[category[0]] += Number(quantity);
    });

    let bookList = [];
    listOfCat.forEach(category => bookList.push(`(${category} : ${books[category]})`));

    return bookList.join(' - ');
  };
}
