function XO(str: string): boolean {
  const arr = str.toLowerCase().split('');

  let count = 0;

  arr.forEach(el => {
    el === 'x' ? count++ : el === 'o' ? count-- : null;
  });

  return count === 0;
}

//!

function XO_1(str: string): boolean {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO('xo')); // true
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('Oo')); // false
console.log(XO('ooom')); // false
