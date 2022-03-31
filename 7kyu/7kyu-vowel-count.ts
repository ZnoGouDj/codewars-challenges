function getCount2(str: string): number {
  const filterLetters = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(el => filterLetters.includes(el)).length;
}

function getCount3(str: string): number {
  return (str.match(/[aeiou]/gi) || []).length;
}

function getCount4(str: string): number {
  return str.replace(/[^aeiou]/gi, '').length;
}
