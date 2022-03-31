function alphabetPosition(text: string): string {
  const positions = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let outputString = '';

  let textSplit = text.split('');

  for (let i = 0; i < textSplit.length; i++) {
    for (let j = 0; j < positions.length; j++) {
      if (textSplit[i].toLowerCase() === positions[j]) {
        outputString += j + 1 + ' ';
      }
    }
  }

  return outputString.trim();
}

//!

function alphabetPosition1(text: string): string {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(c => c.charCodeAt(null) - 64)
    .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition('The narwhal bacons at midnight.')); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
