export function spinWords(words: string): string {
  let arr = words.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' ');
}
