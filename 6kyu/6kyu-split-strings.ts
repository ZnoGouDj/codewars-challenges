function solution(str: string): string[] {
  let result = [];
  let substr = '';

  if (!str.length) return result;

  for (let i = 0; i < str.length; i++) {
    if (substr.length < 2) {
      substr += str[i];
    } else {
      result.push(substr);
      substr = str[i];
    }
  }

  substr.length < 2 ? result.push(substr + '_') : result.push(substr);

  return result;
}
