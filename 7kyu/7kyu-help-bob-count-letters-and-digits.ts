// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// assert.equal(countLettersAndDigits("hel2!lo"), 6);
// assert.equal(countLettersAndDigits("n!!_ice!!123"), 7);
// assert.equal(countLettersAndDigits("1"), 1);
// assert.equal(countLettersAndDigits("?"), 0);
// assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10);
// assert.equal(countLettersAndDigits("aBcDeFg090"), 10);
// assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);

function countLettersAndDigits(input: string): number {
  const inputBreak = input.split('');
  const counter = inputBreak.filter(el => el.match(/^[a-z0-9]+$/i));
  return counter.length;
}
//top
function countLettersAndDigits1(s: string): number {
  return s.replace(/[^a-z\d]/gi, '').length;
}
