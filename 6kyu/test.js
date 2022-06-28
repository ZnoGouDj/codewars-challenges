// function parse(data) {
//   const result = [];

//   const commands = {
//     i: () => val++,
//     d: () => val--,
//     s: () => (val = Math.pow(val, 2)),
//     o: () => result.push(val),
//   };

//   let val = 0;

//   for (let i = 0; i < data.length; i++) {
//     let fn = commands[data[i]];
//     if (typeof fn === 'function') fn();
//   }

//   return result;
// }

// console.log(parse('iiisdoso')); // => [ 8, 64 ]
// console.log(parse('iiisxxxdoso')); // => [ 8, 64 ]
