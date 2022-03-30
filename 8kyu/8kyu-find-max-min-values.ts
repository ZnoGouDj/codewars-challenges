var min = function (list: N[]): N {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list: N[]): N {
  list.sort((a, b) => b - a);
  return list[0];
};

const min1 = (list: N[]): N => Math.min(...list);
const max2 = (list: N[]): N => Math.max(...list);

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
