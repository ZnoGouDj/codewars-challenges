function openOrSenior(data) {
  const arr = [];

  data.map((el, index) => (el[0] >= 55 && el[1] > 7 ? (arr[index] = 'Senior') : (arr[index] = 'Open')));

  return arr;
}

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));
}

//? To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); // ['Open', 'Senior', 'Open', 'Senior']
