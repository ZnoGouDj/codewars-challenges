interface Object {
  hash(str: string): string | object;
}

Object.prototype.hash = function (string) {
  let currentPath = string.split('.')[0];
  if (typeof this[currentPath] === 'object' && string.split('.').length > 1) {
    return this[currentPath].hash(string.split('.').slice(1).join('.'));
  } else if (string.split('.').length === 1) {
    return this[currentPath];
  }
  return undefined;
};

//!

Object.prototype.hash = function (string) {
  var arr = string.split('.');
  return arr.reduce(function (pv, cv) {
    return pv ? pv[cv] : pv;
  }, this);
};

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined
