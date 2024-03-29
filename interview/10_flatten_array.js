function flatten(array) {
  return array.flat(Infinity);
}

function flatten1(array) {
  const res = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten1(array[i]);
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j]);
      }
    } else {
      res.push(array[i]);
    }
  }

  return res;
}

//! top

function flatten2(arr) {
  let result = [];

  arr.forEach(el => {
    if (Array.isArray(el)) {
      result = [...result, ...flatten2(el)];
    } else {
      result = [...result, el];
    }
  });
  return result;
}

console.log(flatten2([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
