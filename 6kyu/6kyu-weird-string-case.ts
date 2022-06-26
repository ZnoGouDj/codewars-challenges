function toWeirdCase(string: string): string {
  let result = [];
  let isUpperCase = true;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result.push(string[i]);
      isUpperCase = true;
    } else if (isUpperCase) {
      result.push(string[i].toUpperCase());
      isUpperCase = false;
    } else {
      result.push(string[i].toLowerCase());
      isUpperCase = true;
    }
  }

  return result.join('');
}
