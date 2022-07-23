const scramble = (str1: string, str2: string): boolean =>
  [...str2].every(val => str2.split(val).length <= str1.split(val).length);
