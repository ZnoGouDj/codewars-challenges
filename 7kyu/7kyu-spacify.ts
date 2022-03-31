/*
Modify the spacify function so that it returns the given 
string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

    assert.equal(spacify('hello world'),'h e l l o   w o r l d');
    assert.equal(spacify('12345'),'1 2 3 4 5');
*/

function spacify(str: string): string {
  let arr = str.split('');
  let lastEl = arr.pop();
  const absResult = arr.map(letter => letter + ' ');
  absResult.push(lastEl);
  return absResult.join('');
}

//top
// Return the same string, but with spaces between characters
function spacify1(str: string): string {
  return str.split('').join(' ');
}
//shortest top2
const spacify2 = (str: string): string => [...str].join(' ');
