function groupBy(arr, by) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (typeof by === 'function') {
      let result = by(arr[i]);
      if (obj.hasOwnProperty(by(arr[i]))) {
        obj[result].push(arr[i]);
      } else {
        obj[result] = [arr[i]];
      }
    } else if (typeof by === 'string') {
      if (obj.hasOwnProperty(arr[i][by])) {
        obj[arr[i][by]].push(arr[i]);
      } else {
        obj[arr[i][by]] = [arr[i]];
      }
    }
  }

  return obj;
}

function groupBy1(array, fn) {
  const result = {};

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const key = typeof fn === 'function' ? fn(current) : current[fn];

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(current);
  }

  return result;
}

function groupBy2(array, fn) {
  return array.reduce((result, current) => {
    const key = typeof fn === 'function' ? fn(current) : current[fn];

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(current);

    return result;
  }, {});
}

console.log(groupBy2([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy2(['one', 'two', 'three'], 'length')); // -> { '3': ['one', 'two'], '5': ['three'] }
