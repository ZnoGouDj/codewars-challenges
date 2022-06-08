function clone(value) {
  return { ...value };
}

var objects = [{ a: 1 }, { b: 2 }];

var shallow = clone(objects);
console.log(shallow[0] === objects[0]);
// => true
