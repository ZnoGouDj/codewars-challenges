// function myFunction1() {
//     var myObject = {
//         objProperty: 'string',
//         objMethod: function() {
//             return myObject.objProperty;
//         },
//     };

//     return myObject.objMethod();
// } wrong

function myFunction() {
  var myObject = {
    objProperty: 'string',
    objMethod: function objMethod() {
      return myObject.objProperty;
    },
  };

  return myObject;
}

//! or

const myFunction1 = () => ({
  objProperty: `string`,
  objMethod() {
    return this.objProperty;
  },
});

console.log(myFunction()); // => { objProperty: 'string', objMethod: [Function: objMethod] }
