/*

the funciton receives 2 objects with different keys, some of the keys can be the same.
you need to return the first object with renewed values from the second object(only the ones that are the same)

Example: 
obj1 = {
  foo: 'foo',
  bar: 'bar',
}
obj2 = {
  bar: 'foo', 
  some: 'some'
}
result = {
  foo: 'foo', 
  bar: 'foo'
}
*/

//! minen

const margeSameKeysOfObjects = (obj1, obj2) => {
  let keysOfObject1 = Object.keys(obj1); //[ 'foo', 'bar' ]
  let keysOfObject2 = Object.keys(obj2); //[ 'bar', 'some' ]

  let keys = keysOfObject1.concat(keysOfObject2); // [ 'foo', 'bar', 'bar', 'some' ]

  let result = [];

  keys.forEach((el, i) => {
    if (i !== keys.lastIndexOf(el)) result.push(el); // ['bar']
  });

  result.forEach(el => {
    obj1[el] = obj2[el];
  });

  return obj1;
};

//? Primitive

const margeSameKeysOfObjects1 = (obj1, obj2) => {
  let keysOfObject1 = Object.keys(obj1); //[ 'foo', 'bar' ]
  let keysOfObject2 = Object.keys(obj2); //[ 'bar', 'some' ]

  for (let i = 0; i < keysOfObject1.length; i++) {
    let key1 = keysOfObject1[i];
    for (let j = 0; j < keysOfObject2.length; j++) {
      let key2 = keysOfObject2[j];
      if (key1 === key2) {
        obj1[key1] = obj2[key];
      }
    }
  }

  return obj1;
};

//* Not so primitive

const margeSameKeysOfObjects2 = (obj1, obj2) => {
  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
};

console.log(margeSameKeysOfObjects2({ foo: 'foo', bar: 'bar' }, { bar: 'foo', some: 'some' }));
