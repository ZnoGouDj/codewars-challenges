function isPalindrome(string: string): boolean {
  return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
}

const isPalindrome1 = (string: string): boolean =>
  string.toLowerCase() === string.toLowerCase().split('').reverse().join('');

console.log(isPalindrome('abba')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('jkkkj')); // true
console.log(isPalindrome('')); // true
