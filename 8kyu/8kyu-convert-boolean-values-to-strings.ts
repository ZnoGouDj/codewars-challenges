// Complete the method that takes a boolean value and return
// a "Yes" string for true, or a "No" string for false.

// Test.assertEquals(boolToWord(true), 'Yes')
// Test.assertEquals(boolToWord(false), 'No')

function boolToWord(bool: B): S {
  return bool == true ? 'Yes' : 'No';
}

const boolToWord1 = (bool: B): S => (bool ? 'Yes' : 'No');
