export function cleanString(s: string): string {
  let stack = [];
  for (const c of s) {
    if (c === '#') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
}
