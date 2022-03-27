/*
Modify the spacify function so that it returns the given 
string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

    assert.equal(spacify('hello world'),'h e l l o   w o r l d');
    assert.equal(spacify('12345'),'1 2 3 4 5');
*/

function spacify(str) {
    let arr = str.split('');
    let lastEl = arr.pop();
    const absResult = arr.map(letter => letter + " ");
    absResult.push(lastEl);
    return absResult.join("");
}

//top
// Return the same string, but with spaces between characters
function spacify(str) {
    return str.split("").join(" ");
}
//shortest top2
const spacify = str => [...str].join(' ');