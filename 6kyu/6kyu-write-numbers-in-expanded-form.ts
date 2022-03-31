function expandedForm(num: number): string {
  const arr = num.toString().split('');
  let length = arr.length - 1;
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i] + '0'.repeat(length);

    if (+num > 0) {
      str += `${num} + `;
    }

    length--;
  }

  return str.substring(0, str.length - 3);
}

// forgot about join()
const expandedForm1 = (n: number): string =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a: any, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(' + ');

console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'
