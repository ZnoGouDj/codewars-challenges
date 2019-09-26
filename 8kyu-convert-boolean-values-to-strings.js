// Complete the method that takes a boolean value and return 
// a "Yes" string for true, or a "No" string for false.

// Test.assertEquals(boolToWord(true), 'Yes')
// Test.assertEquals(boolToWord(false), 'No')

function boolToWord(bool) {
    return bool == true ? 'Yes' : 'No';
}

const boolToWord = bool => bool ? 'Yes' : 'No';

