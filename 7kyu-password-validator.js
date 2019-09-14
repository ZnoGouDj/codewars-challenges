/*
Your job is to create a simple password validation function, 
as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.

Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
Extra info
You will only be passed strings.
The string can contain any standard keyboard character.
Accepted strings can be any length, as long as they are 8 characters or more.
*/

function password(str) {
    if (str.match(/[a-zA-z0-9][a-zA-Z0-9]+/)){
        return true;
    }return false;
}
    let arr = str.split('');
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] ;
    let caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let myStupidity = 0;
    for (let i = 0; i < arr.length; i++) {
        if (numbers.indexOf(arr[i]) != -1) {
            myStupidity++;
        } 
        if (caps.indexOf(arr[i]) != -1) {
            myStupidity++;
        }
        if (lower.indexOf(arr[i]) != -1) {
            myStupidity++;
        }

        
    }
//shit 

//top

function password(str) {
    return str.length >= 8 &&
           /[a-z]/.test(str) &&
           /[A-Z]/.test(str) &&
           /\d/.test(str);
}

//top2

const password = str => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);

//top3

function password(str) {
    const tests = [
      '[A-Z]',
      '[a-z]',
      '[0-9]',
      '.{8,}',
    ]
    return tests.every(test => str.match(RegExp(test)));
}