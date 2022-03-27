/*
Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
*/

function repeatStr(n, s) {
    return s.repeat(n);
}

//another me

const repeatStr = (n, s) => s.repeat(n);

//another

function repeatStr(n, s) {
    let str = "";
    for (let i = 0; i < n; i++)
        str += s;
    return str;
}
