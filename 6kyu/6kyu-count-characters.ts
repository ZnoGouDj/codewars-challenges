function count(string: string) {
  let result = {};

  for (let i = 0; i < string.length; i++) {
    let val = string[i];
    !result[val] ? (result[val] = 1) : result[val]++;
  }

  return result;
}
