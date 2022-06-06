function sample(collection) {
  let keys = Object.keys(collection);

  return collection[keys[Math.floor(Math.random() * keys.length)]];
}

// returns RANDOM from collection

console.log(sample([1, 2, 3, 4]));
// => 2
console.log(sample({ John: 32, Mary: 28, Jane: 54 }));
