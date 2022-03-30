/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"
*/

function findNeedle(haystack: S[]): S {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the needle at position ' + [i];
    }
  }
}

//another

function findNeedle1(haystack: S[]): S {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

//another

const findNeedle2 = (haystack: S[]): S => `found the needle at position ${haystack.indexOf('needle')}`;
