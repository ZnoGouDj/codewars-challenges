/*
This is a spin off of my first kata. You are given a list of 
character sequences as a comma separated string. Write a function 
which returns another string containing all the character sequences 
except the first and the last ones. If the input string is empty, 
or the removal of the first and last items would cause the string 
to be empty, return a null value.

Test.assertEquals(array(''), null);
Test.assertEquals(array('1'), null);
Test.assertEquals(array('1, 3'), null);
Test.assertEquals(array('1,2,3'), '2');
*/
//misunderstood
function array(arr) {
    let realArr = arr.split('');
    let arr1 = realArr.filter(x => (parseInt(x) == x));
    arr1.splice(0, 1);
    arr1.splice(arr1.length - 1, 1);
    if (arr1 == '') {
        return null;
    }
    return arr1.toString();
}

//newFAIL
function array(arr) {
    let str = arr.slice(1, arr.length - 1)
    str = str.replace(/\s/g, '');
    if (str.length != 0) {
        return str.replace(/,/g, '');
    }
    return null;
}

//NEW
const array = word => {
    const characters = word.split(',')
    characters.shift()
    characters.pop()
    return characters.length ? characters.join(' ') : null
}

//top
function array(arr) {
    return arr.split(",").slice(1, -1).join(" ") || null;
}


