function composeAll(...functions) {
  const updatedFunctions = functions.reverse();
  const [first, ...restOffuncs] = updatedFunctions;
  return function (...args) {
    if (!first) return args[0];
    return restOffuncs.reduce((res, fn) => fn(res), first(...args));
  };
}

//!

const composeAll1 =
  (...fns) =>
  (arg) =>
    fns.reduceRight((res, fn) => fn(res), arg);

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

console.log(composeAll(multTwo, addOne)(5)); // => 12
console.log(composeAll(addOne, multTwo, addOne, addOne)(2)); // => 9
console.log(composeAll(addOne)(3)); // => 4
console.log(composeAll()(10)); // => 10
