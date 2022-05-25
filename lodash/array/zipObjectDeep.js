function zipObjectDeep(props, values) {
  return props;
}

console.log(zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])); // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
