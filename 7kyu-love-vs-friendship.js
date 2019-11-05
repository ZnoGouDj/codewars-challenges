// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// Test.assertEquals(wordsToMarks("attitude"), 100);
// Test.assertEquals(wordsToMarks("friends"), 75);
// Test.assertEquals(wordsToMarks("family"), 66);
// Test.assertEquals(wordsToMarks("selfness"), 99);
// Test.assertEquals(wordsToMarks("knowledge"), 96);

function wordsToMarks(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i) - 96;
    }
    return sum;
}

//top
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

//top1
function wordsToMarks(string) {
    return string.split('').reduce((acc, char) => {
        return acc + char.charCodeAt() - 96;
    }, 0);
}