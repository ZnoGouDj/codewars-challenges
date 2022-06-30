export const encryptThis = (str: string): string => {
  if (!str) return '';

  let arr = str.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let first = arr[i][0].charCodeAt(0);

    let second = arr[i][arr[i].length - 1];

    let last = arr[i][1];

    let body = arr[i].slice(2, -1);

    if (arr[i].length < 2) {
      result.push(first);
    } else if (arr[i].length < 3) {
      let encrypted = first + last;

      result.push(encrypted);
    } else {
      let encrypted = first + second + body + last;

      result.push(encrypted);
    }
  }

  return result.join(' ');
};

export let encryptTh1s = (str: string): string => {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => {
      let first = word[0];
      let second = word.length > 1 ? word[1] : '';
      let middle = word.slice(2, -1);
      let last = word.length > 2 ? word[word.length - 1] : '';
      return first.charCodeAt(0) + last + middle + second;
    })
    .join(' ');
};
