// Your job is to figure out the index of which vowel is missing from a given string.

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.

// Example: "John Doe hs 7 red pples under his bsket" => 0;
// Example: "Bb Smith sent us six neatly arranged range bicycles" => 3;
// There is no need for string validation and every sentence given will contain all vowles but one. (Also, you won't need to worry about capitals)

// Test.assertEquals(absentVowel("John Doe hs seven red pples under his bsket"), 0);
// Test.assertEquals(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);

function absentVowel(x: string): number {
  var vowels: String = 'aeiou';
  for (var i in vowels) {
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i);
    }
  }
}
