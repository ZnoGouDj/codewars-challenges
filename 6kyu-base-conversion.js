// In this kata you have to implement a base converter, which converts positive integers 
// between arbitrary bases / alphabets. Here are some pre-defined alphabets:

// var Alphabet = {
//   BINARY:        '01',
//   OCTAL:         '01234567',
//   DECIMAL:       '0123456789',
//   HEXA_DECIMAL:  '0123456789abcdef',
//   ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
//   ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// };
// The function convert() should take an input (string), the source alphabet (string) 
// and the target alphabet (string). You can assume that the input value always consists 
// of characters from the source alphabet. You don't need to validate it.

// Examples
// convert between numeral systems
// convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
// convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
// convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
// convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
// convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
// Additional Notes:

// The maximum input value can always be encoded in a number without loss of precision 
// in JavaScript. In Haskell, intermediate results will probably be too large for Int.
// The function must work for any arbitrary alphabets, not only the pre-defined ones
// You don't have to consider negative numbers
// ===========================================================================
// Given two set of digits (source and destination) and one string containing 
// a "number" (this "number" can contain alphanumerical "digits"). 
// Change the base or radix of this given "number" to other bases 
// using the digits of the destination base.

// Example (Converting the number "hello" in base "allow" to base 10):

// In base "allow" we have the digits "a,b,c,d,...,z"; the "a" is the 
// number 0 in base 10, meanwhile z is number 25 in base 10.

// We take the 'h' and multiply it decimal value by pow(25, 4). 25 is the 
// base number (We only have 25 digits, and 4 is the "position" of the digit in the number)
// now with e, and l, and so on. Now we sum all the values of each digits 
// and now we have a number in base 10, which is: 3276872

// Remember that each base uses different digits.
// ===========================================================================
// Test.assertEquals(convert("15", dec, bin), '1111', '"15" dec -> bin');
// Test.assertEquals(convert("15", dec, oct), '17', '"15" dec -> oct');
// Test.assertEquals(convert("1010", bin, dec), '10', '"1010" bin -> dec');
// Test.assertEquals(convert("1010", bin, hex), 'a', '"1010" bin -> hex');

function convert(input, source, target) {

    const Alphabet = {
        BINARY:        '01',
        OCTAL:         '01234567',
        DECIMAL:       '0123456789',
        HEXA_DECIMAL:  '0123456789abcdef',
        ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
        ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      };

    if (source === BINARY) { binary(input, target); }
    if (source === OCTAL) { octal(input, target); }
    if (source === DECIMAL) { decimal(input, target); }
    if (source === HEXA_DECIMAL) { hexaDecimal(input, target); }
    if (source === ALPHA_LOWER) { alLow(input, target); }
    if (source === ALPHA_UPPER) { alUp(input, target); }
    if (source === ALPHA) { alpha(input, target); }
    if (source === ALPHA_NUMERIC) { alNum(input, target); }

  }

  function alLow(input, target) { 
      
  }