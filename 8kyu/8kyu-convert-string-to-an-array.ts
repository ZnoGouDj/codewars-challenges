// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Test.assertDeepEquals(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// Test.assertDeepEquals(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

const stringToArray = (string: S): S[] => string.split(' ');
