export const camelCase = (str: string): string =>
  str
    .split(' ')
    .map(s => (s ? s[0].toUpperCase() + s.slice(1) : ''))
    .join('');
