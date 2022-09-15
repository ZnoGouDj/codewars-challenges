const calculate =
  (...args1) =>
  (...args2) =>
    [...args1, ...args2].reduce((s, v) => s + v);
