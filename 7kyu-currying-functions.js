function multiplyAll(arr) {
  return function (multiplier) {
    return arr.map(el => el * multiplier);
  };
}
