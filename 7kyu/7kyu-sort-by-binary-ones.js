function sortByBinaryOnes(list) {
  let binaryList = list.map(el => el.toString(2));

  binaryList.sort(function (a, b) {
    if (getOneCount(a) < getOneCount(b)) {
      return 1;
    }
    if (getOneCount(a) > getOneCount(b)) {
      return -1;
    } else {
      if (a.length > b.length) {
        return 1;
      } else if (a.length < b.length) {
        return -1;
      } else if (a.length === b.length) {
        if (a.toString(10) > b.toString(10)) {
          return 1;
        } else if (a.toString(10) < b.toString(10)) {
          return -1;
        }
      }
    }
  });

  return binaryList.map(el => parseInt(el, 2));
}

function getOneCount(num) {
  let numSplit = num.split('');

  return numSplit.filter(el => el === '1').length;
}

//!

const sortByBinaryOnes = list =>
  list.sort((a, b) => b.toString(2).replace(/0/g, ``).length - a.toString(2).replace(/0/g, ``).length || a - b);

console.log(sortByBinaryOnes([1, 3]));
