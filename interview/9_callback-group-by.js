/*

Implement the func that receives 2 params:
- values array
- callback that will group the values 

The func should return an object, where:
keys == group name
values == groups

Example: 
arr = [6.1, 4.2, 6.3]
callbackFunc = Math.Floor
result = {
  '4': [4.2],
  '6': [6.1, 6.3]
}

*/
//! minen
const groupBy = (arr, cb) => {
  const obj = {};

  const callbacked = arr.map(el => {
    return cb(el);
  });

  callbacked.forEach((el, i) => {
    if (obj.hasOwnProperty(el)) {
      obj[el].push(arr[i]);
    } else {
      obj[el] = [arr[i]];
    }
  });

  return obj;
};

console.log(groupBy([6.1, 4.2, 6.3], Math.ceil));

//? not minen
const groupBy1 = (arr, cb) => {
  const result = {};

  arr.forEach(item => {
    let resultAfterCb = cb(item);
    result[resultAfterCb] ? result[resultAfterCb].push(item) : (result[resultAfterCb] = [item]);
  });

  return result;
};
