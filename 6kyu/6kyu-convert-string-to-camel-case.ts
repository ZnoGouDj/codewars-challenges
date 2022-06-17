function toCamelCase(str: string): string {
  if (!str.length) return str;
  let isStartsWithUpperCase = str[0] === str[0].toUpperCase();
  let stringValidation = str.toLowerCase();

  return stringValidation
    .split(/_|-/)
    .map((word, index) => {
      return !isStartsWithUpperCase && !index
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1);
    })
    .join('');
}
