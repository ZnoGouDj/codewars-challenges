function kebabize(str: string): string {
  const result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i] && !/^\d+$/.test(str[i])) {
      result.push('-', str[i].toLowerCase());
    } else if (!/^\d+$/.test(str[i])) {
      result.push(str[i]);
    }
  }

  return result[0] === '-' ? result.join('').slice(1) : result.join('');
}

console.log(kebabize('myCamelCasedString')); // => 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps')); // => 'my-camel-has-humps'
