/*

Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case                   	return
name equals owner   	'Hello boss'
otherwise           	'Hello guest'

Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')

*/

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss';
    } return 'Hello guest';
}

//another mine

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';

//another

const greet = (name, owner) => `Hello ${name==owner ? "boss" : "guest"}`