function makeClass(...properties: string[]) {
  return class {
    constructor(...props: string[]) {
      for (let i = 0; i < [...props].length; i++) {
        this[properties[i]] = props[i];
      }
    }
  };
}

//! or

function makeClass1(...properties: string[]) {
  return class {
    constructor(...props: string[]) {
      properties.forEach((prop, index) => {
        this[prop] = props[index];
      });
    }
  };
}

const Animel = makeClass('name', 'age');

console.log(new Animel('Egor', '26'));
