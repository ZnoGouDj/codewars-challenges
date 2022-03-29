// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Test.assertEquals(removeChar('eloquent'), 'loquen');
// Test.assertEquals(removeChar('country'), 'ountr');
// Test.assertEquals(removeChar('person'), 'erso');
// Test.assertEquals(removeChar('place'), 'lac');

function removeChar(str: string): string {
  return str.substr(1, str.length - 2);
}

//top
function removeChar1(str: string): string {
  return str.slice(1, -1);
}
