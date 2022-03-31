// Write a program that, given a word, computes the scrabble score for that word.
// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// There will be preloaded a $dict with all this values in your kata in form of a hash $dict["E"] => 1.

// Examples
// scrabbleScore('cabbage') // => 14
// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14
// Empty string should return 0. The string can contain whitespaces, you should calculate the scrablle score only of the letters in that string.

// scrabbleScore('') // => 0
// scrabbleScore('ca bba g  e') // => 14

// Test.it( "returns 0 for ''", function(){ Test.assertEquals(scrabbleScore(""), 0) });
// Test.it( 'returns 1 for a', function(){ Test.assertEquals(scrabbleScore('a'), 1) });
// Test.it( 'returns 6 for street', function(){ Test.assertEquals(scrabbleScore("street"), 6) });

// Test.it( 'returns score of " a" (with space)', function(){ Test.assertEquals(scrabbleScore(' a'), 1) });
// Test.it( 'returns 6 for street with whitespaces', function(){ Test.assertEquals(scrabbleScore("st re et"), 6) });

function scrabbleScore(str: string): N {
  const one = 'AEIOULNRST';
  const two = 'DG';
  const three = 'BCMP';
  const four = 'FHVWY';
  const five = 'K';
  const eight = 'JX';
  const ten = 'QZ';
  const wordApart = str.toUpperCase().split('');
  let counter = 0;
  wordApart.forEach(element => {
    if (one.indexOf(element) > -1) {
      counter++;
    }
    if (two.indexOf(element) > -1) {
      counter += 2;
    }
    if (three.indexOf(element) > -1) {
      counter += 3;
    }
    if (four.indexOf(element) > -1) {
      counter += 4;
    }
    if (five.indexOf(element) > -1) {
      counter += 5;
    }
    if (eight.indexOf(element) > -1) {
      counter += 8;
    }
    if (ten.indexOf(element) > -1) {
      counter += 10;
    }
  });
  return counter;
}

//top
// function scrabbleScore1(str: string): N {
//   return str
//     .toUpperCase()
//     .split('')
//     .reduce(function (score, v) {
//       return score + ($dict[v] || 0);
//     }, 0);
// }
