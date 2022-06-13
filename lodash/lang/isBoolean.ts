function isBoolean(value: any): boolean {
  return (
    typeof value === 'boolean' ||
    (value !== null && typeof value === 'object' && typeof value.valueOf() === 'boolean')
  );
}

console.log(isBoolean(false)); // => true

console.log(isBoolean(null)); // => false

console.log(isBoolean(new Boolean(1))); // => true
