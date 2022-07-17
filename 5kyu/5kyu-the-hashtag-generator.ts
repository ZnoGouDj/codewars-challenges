function generateHashtag(str: string): string | boolean {
  if (!str.trim().length) return false;

  let result =
    '#' +
    str
      .trim()
      .replace(/\s\s+/g, ' ')
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join('');

  return result.length > 140 ? false : result;
}
