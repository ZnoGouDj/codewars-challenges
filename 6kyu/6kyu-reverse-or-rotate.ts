function revrot(str: string, sz: number): string {
  // if sz is <= 0 or if str is empty return ""
  if (sz <= 0 || !str) return '';

  let result = [];
  // Cut the string into chunks
  let arr = chunkString(str, sz);
  // Ignore the last chunk if its size is less than sz
  if (arr[arr.length - 1].length < sz) arr.pop();
  // If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2
  arr.forEach(el => {
    if (isDivisible(el)) {
      // reverse that chunk
      result.push(reverseS(el));
    } else {
      // otherwise rotate it
      result.push(rotate(el));
    }
  });
  // Put together these modified chunks and return the result as a string.
  return result.join('');
}

const isDivisible = (el: string): boolean => {
  return !(
    el
      .split('')
      .map(el => Math.pow(Number(el), 2))
      .reduce((a, b) => a + b) % 2
  );
};

const chunkString = (str: string, length: number): string[] => str.match(new RegExp('.{1,' + length + '}', 'g'));

const reverseS = (s: string): string => [...s].reverse().join('');

const rotate = (s: string): string => s.substring(1) + s.charAt(0);

//!

function revrot1(str: string, sz: number): string {
  if (sz < 1 || sz > str.length) return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + b ** 3, 0);

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => (sum_cubes(c) % 2 ? rotate(c) : reverse(c)))
    .join('');
}

console.log(revrot('123456987654', 6)); // --> "234561876549"
console.log(revrot('123456987653', 6)); // --> "234561356789"
console.log(revrot('66443875', 4)); // --> "44668753"
console.log(revrot('66443875', 8)); // --> "64438756"
