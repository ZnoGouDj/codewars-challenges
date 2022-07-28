const NATO = {
  a: 'Alfa',
  n: 'November',
  b: 'Bravo',
  o: 'Oscar',
  c: 'Charlie',
  p: 'Papa',
  d: 'Delta',
  q: 'Quebec',
  e: 'Echo',
  r: 'Romeo',
  f: 'Foxtrot',
  s: 'Sierra',
  g: 'Golf',
  t: 'Tango',
  h: 'Hotel',
  u: 'Uniform',
  i: 'India',
  v: 'Victor',
  j: 'Juliett',
  w: 'Whiskey',
  k: 'Kilo',
  x: 'Xray',
  l: 'Lima',
  y: 'Yankee',
  m: 'Mike',
  z: 'Zulu',
};

function to_nato(words: string): string {
  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    let el = words[i].toLowerCase();
    if (NATO[el]) {
      result.push(NATO[el]);
    } else if (/[,.!?]/.test(el)) {
      result.push(el);
    }
  }

  return result.join(' ');
}

console.log(to_nato('If, you can read?')); // => India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
console.log(to_nato('If you can read')); // => "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
console.log(to_nato('Did not see that coming')); // => "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
console.log(to_nato('go for it!')); // =>"Golf Oscar Foxtrot Oscar Romeo India Tango !"
