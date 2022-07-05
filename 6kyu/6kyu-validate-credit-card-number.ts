function validate(n: number): boolean {
  let str = [...String(n)].map(n => +n);

  for (let i = str.length - 2; i >= 0; i -= 2) {
    if (+str[i] * 2 < 10) {
      str[i] *= 2;
    } else {
      str[i] = [...String(+str[i] * 2)].reduce((acc, val) => acc + +val, 0);
    }
  }

  return str.reduce((acc, val) => acc + +val, 0) % 10 === 0;
}
