function accum(s) {
  return s.split('').reduce((acc, val, i) => {
    let repeat = val.toUpperCase() + val.repeat(i).toLowerCase() + '-';
    return acc + repeat;
  }, '');
}

console.log(accum('abcd')); // -> "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // -> "C-Ww-Aaa-Tttt"
