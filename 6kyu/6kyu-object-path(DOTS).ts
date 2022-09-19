function find(object, path) {
  let firstInPath = path.split('.')[0];
  if (typeof object[firstInPath] === 'object') {
    return find(object[firstInPath], path.split('.').slice(1).join('.'));
  } else if (path.split('.').length === 1) {
    return object[firstInPath];
  }
  return undefined;
}

//!

const _ = require('lodash');

function find1(object, path) {
  return _.has(object, path) ? _.get(object, path) : undefined;
}

let object = {
  user: {
    name: {
      first: 'John',
      last: 'Snow',
    },
  },
};

let path = 'user.name.first';
console.log(find(object, path)); // 'John'

let object1 = {
  user: {
    addresses: [[Object], [Object]],
    name: {
      first: 'John',
      last: 'Snow',
    },
  },
};

let path1 = 'user.name.first.initial.capitalized';
console.log(find(object1, path1)); // undefined
