function forEachRight(collection, iteratee) {
  let props = Object.keys(collection).reverse();

  props.forEach(el => {
    if (collection.hasOwnProperty(el)) {
      iteratee(collection[el], el);
    }
  });
}

console.log(
  forEachRight([1, 2], function (value) {
    console.log(value);
  })
); // => Logs `2` then `1`.
