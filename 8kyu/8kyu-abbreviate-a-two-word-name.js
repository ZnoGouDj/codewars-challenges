// Write a function to convert a name into initials. This kata strictly 
// takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");

function abbrevName(name) {
    let nameArr = name.split(" ");
    let newStr = nameArr[0].charAt(0) + '.' + nameArr[1].charAt(0);
    return newStr.toUpperCase();
}

//top shorter

function abbrevName(name) {
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//top2

function abbrevName(name) {
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}