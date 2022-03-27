/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

*/

function isPalindrome(line) {
    line += '';
    let backward = '';
    for (let i = line.length - 1; i >= 0; i--) {
        backward += line[i];
    }
    return backward === line;
}

//top

function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join(''))

}

//top2

function isPalindrome(line) {
    return (line.toString() == line.toString().split('').reverse().join(''));
}

//lol
isPalindrome = _ => !0