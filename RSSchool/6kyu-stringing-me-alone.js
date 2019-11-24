/*
Create a function that will allow you to pass in a string, 
with the ability to add to this with more function calls. .
When it is finally passed an empty argument return the full 
concatinated string of all arguments pased previously.

For example: createMessage("Hello")("World!")("how")("are")("you?")();

This will return the following: "Hello World! how are you?"

Test.expect(createMessage("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?");
*/

function createMessage() {
  let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(this[i]);
    }
    return arr.toString;
  }