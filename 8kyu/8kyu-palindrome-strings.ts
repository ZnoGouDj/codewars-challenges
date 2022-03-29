/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

*/

function isPalindrome(line: string): boolean {
  line += '';
  let backward = '';
  for (let i = line.length - 1; i >= 0; i--) {
    backward += line[i];
  }
  return backward === line;
}

//top

function isPalindrome1(line: string): boolean {
  return String(line) == String(line).split('').reverse().join('');
}

//top2

function isPalindrome2(line: string): boolean {
  return line.toString() == line.toString().split('').reverse().join('');
}

//lol
const isPalindrome4 = (_: string): boolean => !0;
