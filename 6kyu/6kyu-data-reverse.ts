function dataReverse(data) {
  let arr = data.join('').match(/.{1,8}/g);

  return arr
    .reverse()
    .join('')
    .split('')
    .map(el => +el);
}
