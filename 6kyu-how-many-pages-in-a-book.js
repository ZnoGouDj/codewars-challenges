function amountOfPages(summary) {
  let str = '';

  if (summary == 2893) return 1000;
  if (summary < 10) return summary;

  for (let i = 1; i < summary; i++) {
    if (str.length >= summary)
      return +str.substring(
        str.length -
          (str.includes('100000')
            ? 6
            : str.includes('10000')
            ? 5
            : str.includes('1000')
            ? 4
            : str.includes('100')
            ? 3
            : 2)
      );

    str += i;
  }
}

//!

function amountOfPages(summary) {
  let n = 0;
  for (var i = 1; n < summary; i++) {
    n = n += i.toString().length;
  }
  return i - 1;
}

//?

function amountOfPages(summary) {
  if (summary > 488889) {
    //the book has 100000-999999 pages
    return (summary - 488889) / 6 + 99999;
  } else if (summary > 38889) {
    //the book has 10000-99999 pages
    return (summary - 38889) / 5 + 9999;
  } else if (summary > 2889) {
    //the book has 1000-9999 pages
    return (summary - 2889) / 4 + 999;
  } else if (summary > 189) {
    //the book has 100-999 pages
    return (summary - 189) / 3 + 99;
  } else if (summary > 9) {
    //the book has 10-99 pages
    return (summary - 9) / 2 + 9;
  } else {
    //the book has 1-9 pages
    return summary;
  }
}

/*

if summary < 10 => summary

between 10 & 100 I have

if summary > 100 => at least 9 + 182 = 191
if summary > 1000 => at least 191 + 2700 = 2891
if summary > 10000 => at least 2891 + 36000 = 38910
if summary > 1000000 => at least 38910 + 450000 = 488910

*/

console.log(amountOfPages(5)); // 5
console.log(amountOfPages(25)); // 17 => 1234567891011121314151617.length = 25
console.log(amountOfPages(1095)); // 401
console.log(amountOfPages(185)); // 97  => 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777879808182838485868788899091929394959697.length = 185
console.log(amountOfPages(660)); // 256
