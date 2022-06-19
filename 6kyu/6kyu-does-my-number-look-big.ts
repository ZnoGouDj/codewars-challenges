function narcissistic(value: number): boolean {
  return (
    [...String(value)].reduce((acc, val) => acc + Math.pow(+val, String(value).length), 0) === value
  );
}
