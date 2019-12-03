// You need to play around with the provided string (s).
// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.

// Exceptions:
// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
// Provided string will always be lower case, won't be empty and will have no special characters.

// Test.describe("Example tests",_=>{
//     Test.assertSimilar(vowelBack("testcase"), "tabtbvba");
//     Test.assertSimilar(vowelBack("codewars"), "bnaafvab");
//     Test.assertSimilar(vowelBack("exampletesthere"), "agvvyuatabtqaaa");
//     });

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function vowelBack(s) {
    let result = [];
    let tempArray = s.split('');
    for (let i = 0; i < tempArray.length; i++) {
        let x = tempArray[i];

        if (checkCODE(x)) {
            result.push(moveThisException(x));
        } else if (isVowel(x)) {
            if (checkCODE(moveBack(x))) {
                result.push(x);
            } else {
                result.push(moveBack(x));
            }
        } else {
            if (checkCODE(moveForward(x))) {
                result.push(x);
            } else {
                result.push(moveForward(x));
            }
        }
    }
    return result.join('');
}

function isVowel(char) {
    return VOWELS.indexOf(char) > -1 ? true : false;
}

function moveForward(char) {
    let initialCharacterIndex = ALPHABET.indexOf(char);
    return initialCharacterIndex + 9 >= 26 ?
        ALPHABET[initialCharacterIndex + 9 - 26] : ALPHABET[initialCharacterIndex + 9];
}

function moveBack(char) {
    let initialCharacterIndex = ALPHABET.indexOf(char);
    return initialCharacterIndex - 5 < 0 ?
        ALPHABET[initialCharacterIndex - 5 + 26] : ALPHABET[initialCharacterIndex - 5];
}

function checkCODE(char) {
    return char === 'c' ? true : char === 'o' ? true : char === 'd' ? true : char === 'e' ? true : false;
}

function moveThisException(char) {
    switch (char) {
        case 'c':
            return 'b';
        case 'o':
            return 'n';
        case 'd':
            return 'a';
        case 'e':
            return 'a';
        default:
            return char;
    }
}