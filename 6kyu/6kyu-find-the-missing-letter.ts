export function findMissingLetter(array: string[]): string {
  const str = array.join('');
  for (let i = 0; i < array.length - 1; i++) {
    if (Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1)) !== 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return '';
}
