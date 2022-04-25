function withoutRepeat1(arr) {
  let counter = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) counter++;
    }
    if (counter < 2) result.push(arr[i]);
    counter = 0;
  }

  return result;
}

function withoutRepeat(array) {
  const uniqueValue = [];
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const currentEl = array[i];
    obj[currentEl] = obj[currentEl] >= 1 ? obj[currentEl] + 1 : 1;
  }

  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (obj[key] === 1) {
      uniqueValue.push(key);
    }
  });
  return uniqueValue;

  return Object.entries(obj)
    .filter(([key, value]) => value < 2)
    .map(el => el[0]);
}

console.log(withoutRepeat([1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9])); // [2, 3, 5, 8, 9]
