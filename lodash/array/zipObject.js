function zipObject(props, values) {
  let result = {};

  for (let i = 0; i < props.length; i++) {
    result[props[i]] = values[i];
  }

  return result;
}

console.log(zipObject(['a', 'b'], [1, 2])); // => { 'a': 1, 'b': 2 }
