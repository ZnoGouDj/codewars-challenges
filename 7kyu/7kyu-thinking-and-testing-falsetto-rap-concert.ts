// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// Test.assertSimilar(testit("Xp Zn, Dgfbl ugjr nvs! Fufqz ohhgu jm lz eqfznr"),"Yo Yo, Check this out! Every night in my dreams", "")
// Test.assertSimilar(testit("Ni zdbg! J tdf znv, H efdm znv"),                 "Oh yeah! I see you, I feel you", "")
// Test.assertSimilar(testit("Ovs xpts izoct vo! Ugbs ht inx J lmpv xpt fp pm"),"Put your hands up! That is how I know you go on", "")
// Test.assertSimilar(testit("Bplf pm dwdsxcnex! Gzs bbsntr sid cjruzobf"),     "Come on everybody! Far across the distance", "")
// Test.assertSimilar(testit("Kjrudo vo! Bme tobbfr afsxdfm tt"),               "Listen up! And spaces between us", "")
// Test.assertSimilar(testit("Obqux sjlf! Xpt gbuf dnnd sp tgpv xpt fp pm"),    "Party time! You have come to show you go on", "")

function testit(s: string): string {
  let alphabet = [
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
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let arr = s.split('');
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] === 'z') {
      arr[i] = 'a';
    } else if (arr[i] === 'Z') {
      arr[i] = 'A';
    } else if (alphabet.indexOf(arr[i]) > -1) {
      arr[i] = alphabet[alphabet.indexOf(arr[i]) + 1];
    }
  }
  for (let j = 1; j < arr.length; j += 2) {
    if (arr[j] === 'a') {
      arr[j] = 'z';
    } else if (arr[j] === 'A') {
      arr[j] = 'Z';
    } else if (alphabet.indexOf(arr[j]) > -1) {
      arr[j] = alphabet[alphabet.indexOf(arr[j]) - 1];
    }
  }
  return arr.join('');
}

//top

const testit1 = (s: string): string =>
  s
    .split('')
    .map((letter, index) => switchLetter(letter, index % 2 ? -1 : 1))
    .join('');

const switchLetter = (letter: string, direction: number): number =>
  isLetter(letter) ? getValidLetter(String.fromCharCode(letter.charCodeAt(0) + direction), direction) : letter;

const isLetter = (letter: string): string[] => letter.match(/[a-z]/i);

const getValidLetter = (letter: any, direction: number) =>
  isLetter(letter) ? letter : String.fromCharCode(letter.charCodeAt(0) - 26 * direction);
