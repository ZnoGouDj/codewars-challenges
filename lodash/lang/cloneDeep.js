function cloneDeep(value) {
  if (!arguments.length) return [];

  let result = Array.isArray(value) ? [] : {};

  for (let key in value) {
    let el = value[key];
    let obj = {};

    if (Array.isArray(value)) {
      for (let key in el) {
        if (typeof el[key] === 'object') {
          let temp = cloneDeep(el[key]);
          obj[key] = temp;
        } else {
          obj[key] = el[key];
        }
      }
    } else {
      obj[key] = value[key];
    }

    if (Array.isArray(value)) {
      result.push(obj);
    } else {
      for (let key in obj) {
        result[key] = obj[key];
      }
    }
    obj = {};
  }

  return result;
}

// recursively clones value.

var objects = [{ a: 1 }, { b: 2, c: 3, d: { e: 5, k: { e: 9 } } }];

var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

console.log(deep);
console.log(deep[1]['d']);
