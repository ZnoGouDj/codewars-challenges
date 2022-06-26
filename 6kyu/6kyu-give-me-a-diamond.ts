function diamond(n: number): string {
  if (n % 2 === 0 || n < 0) return null;

  let result = '';

  for (let i = 1; i <= n; i += 2) {
    result += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    result += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
  }

  return result;
}
