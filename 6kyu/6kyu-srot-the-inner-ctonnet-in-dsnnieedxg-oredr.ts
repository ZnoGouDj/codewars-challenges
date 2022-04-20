export function sortTheInnerContent(words: string): string {
  let arr = words.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 4) result.push(arr[i]);
    else {
      let firstLetter = arr[i].substring(0, 1);
      let lastLetter = arr[i].substring(arr[i].length - 1, arr[i].length);
      let middleToSort = arr[i].substring(1, arr[i].length - 1).split('');

      middleToSort.sort().reverse();

      result.push(firstLetter + middleToSort.join('') + lastLetter);
    }
  }

  return result.join(' ');
}

export function sortTheInnerConten1t(words: string): string {
  return words
    .split(' ')
    .map(w => (w.length < 2 ? w : w[0] + w.slice(1, -1).split('').sort().reverse().join('') + w.slice(-1)))
    .join(' ');
}
