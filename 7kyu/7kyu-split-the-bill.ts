function splitTheBill(x: { [key: string]: number }) {
  let obj = {};
  let average = Object.values(x).reduce((acc, val) => acc + val, 0) / Object.values(x).length;

  for (let key in x) {
    let isDecimal = (x[key] - average) % 1 !== 0;
    let numToFixed = !isDecimal
      ? undefined
      : String(x[key] - average).split('.')[1].length > 1
      ? 2
      : 1;
    if (isDecimal) console.log(String(x[key] - average).split('.')[1].length);
    obj[key] = isDecimal ? +(x[key] - average).toFixed(numToFixed) : x[key] - average;
  }

  return obj;
}

console.log(
  splitTheBill({
    A: 20,
    B: 15,
    C: 10,
  }),
); // => { A: 5, B: 0, C: -5 });
console.log(
  splitTheBill({
    A: 40,
    B: 25,
    X: 10,
  }),
); // => { A: 15, B: 0, X: -15 });
console.log(
  splitTheBill({
    A: 40,
    B: 25,
    C: 10,
    D: 153,
    E: 58,
  }),
);
