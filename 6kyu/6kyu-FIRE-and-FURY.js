function fireAndFury(tweet) {
  let replaceFury = tweet.replaceAll('FURY', 0);
  let replaceFire = replaceFury.replaceAll('FIRE', 1);
  let arr = replaceFire.split('');

  if (checkIfFake(arr)) return 'Fake tweet.';

  let array = arr.filter(el => +el >= 0);
  const result = [];
  let counter = -1;
  let currentThing = array[0];

  let furyCase = 'really ';
  let fireCase = 'and you ';

  for (let i = 0; i <= array.length; i++) {
    if (array[i] !== currentThing) {
      if (array[i - 1] == 0) {
        result.push(`I am ${furyCase.repeat(counter--)} furious.`);
      } else if (array[i - 1] == 1) {
        result.push(`You ${fireCase.repeat(counter--)} are fired!`);
      }
      counter = 0;
      currentThing = array[i];
    } else {
      counter++;
    }
  }

  return result.length ? result.map(el => el.replace(/\s\s+/g, ' ')).join(' ') : 'Fake tweet.';
}

function checkIfFake(arr) {
  let check = 'EFIRUY01';

  let imTiredToCreateBetterSolution = 0;

  arr.forEach(el => {
    if (!check.includes(el)) {
      imTiredToCreateBetterSolution++;
    }
  });

  return !!imTiredToCreateBetterSolution;
}

// stole this one from the google
String.prototype.replaceAll = function (str, newStr) {
  if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
    return this.replace(str, newStr);
  }

  return this.replace(new RegExp(str, 'g'), newStr);
};

//!

var fireAndFury = function (tweet) {
  let matches = tweet.match(/(FURY|FIRE)/g);

  if (/[^EFIRUY]/.test(tweet) || !matches) return 'Fake tweet.';

  return matches
    .join('')
    .match(/(FURY|FIRE)\1*/g)
    .map(match => {
      let terms = match.length / 4 - 1;

      return match[1] === 'I'
        ? 'You ' + 'and you '.repeat(terms) + 'are fired!'
        : 'I am ' + 'really '.repeat(terms) + 'furious.';
    })
    .join(' ');
};

//?

// I'm not proud of this, but I put about as much effort into it as
// the angry tweeter himself.
const fireAndFury = t => {
  if (t.replace(/[FIREUY]/g, '').length > 0) return 'Fake tweet.';
  t = t.replace(/FIRE/g, '-').replace(/FURY/g, '=').replace(/[^-=]/g, '');
  if (!t.length) return 'Fake tweet.';
  t = t.split('');
  let last,
    ans = '';
  for (let i = 0; i < t.length; i++) {
    if (t[i] == '=' && last != '=') ans += 'I am ';
    if (t[i] == '=' && last == '=') ans += 'really ';
    if (t[i] == '=' && t[i + 1] != '=') ans += 'furious. ';
    if (t[i] == '-' && last != '-') ans += 'You ';
    if (t[i] == '-' && last == '-') ans += 'and you ';
    if (t[i] == '-' && t[i + 1] != '-') ans += 'are fired! ';
    last = t[i];
  }
  return ans.trim();
};

console.log(fireAndFury('FURYYYFIREYYFIRE')); // 'I am furious. You and you are fired!'
console.log(fireAndFury('FIREYYFURYYFURYYFURRYFIRE')); // 'You are fired! I am really furious. You are fired!'
console.log(fireAndFury('FYRYFIRUFIRUFURE')); // 'Fake tweet.'

/*

FIRE x 1 = "You are fired!"
FIRE x 2 = "You and you are fired!"
FIRE x 3 = "You and you and you are fired!"
etc...
FURY x 1 = "I am furious."
FURY x 2 = "I am really furious."
FURY x 3 = "I am really really furious."
etc...

*/
