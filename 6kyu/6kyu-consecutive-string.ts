export function longestConsec(strarr: string[], k: number): string {
  let longest = '';
  if (strarr.length === 0 || k < 1) return '';

  for (let i = 0; i <= strarr.length - k; i++) {
    let localLongest = strarr.slice(i, i + k).join('');
    if (localLongest.length > longest.length) {
      longest = localLongest;
    }
  }

  return longest;
}
