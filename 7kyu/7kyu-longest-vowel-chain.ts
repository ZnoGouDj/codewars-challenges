/*
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. Given a lowercase 
string that has alphabetic characters only and no spaces, 
return the length of the longest vowel substring.

Good luck!

Test.assertEquals(solve("codewarriors"),2);
Test.assertEquals(solve("suoidea"),3);
Test.assertEquals(solve("ultrarevolutionariees"),3);
Test.assertEquals(solve("strengthlessnesses"),1);
Test.assertEquals(solve("cuboideonavicuare"),2);
Test.assertEquals(solve("chrononhotonthuooaos"),5);
Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);
*/

//50% test success

function solve(s: string): N {
  let arr = s.split('');
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'a':
        count++;
        break;
      case 'u':
        count++;
        break;
      case 'e':
        count++;
        break;
      case 'i':
        count++;
        break;
      case 'o':
        count++;
        break;
      case 'y':
        count++;
        break;
      default:
        newArr.push(count);
        count = 0;
        break;
    }
  }
  let final = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] > final) {
      final = newArr[j];
    }
  }
  return final;
}

//top

const solve1 = (s: string): N => s.split(/[^aeiou]/).reduce((s, n) => Math.max(s, n.length), 0);

//top2

function solve2(s: string): N {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < s.length; ++i) {
    if ('aeiou'.includes(s[i])) {
      cur++;
      if (cur > max) {
        max = cur;
      }
    } else {
      cur = 0;
    }
  }
  return max;
}
