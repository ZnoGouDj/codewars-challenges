const CONVERSION = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
};

function rgb(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(val => (val < 0 ? 0 : val > 255 ? 255 : val))
    .map(val => {
      return CONVERSION[Math.floor(val / 16)] + CONVERSION[Math.floor(val % 16)];
    })
    .join('');
}

// ?

function rgb1(r: number, g: number, b: number): string {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return '00';
  }
  if (d > 255) {
    return 'FF';
  }
  return ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
}
