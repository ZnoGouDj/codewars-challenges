// function zipObjectDeep(props, values) {
//   let result = [];
//   let toCompare = {};

//   for (let i = props.length - 1; i >= 0; i--) {
//     let path = props[i].split('.');
//     let element = {};
//     element[path[path.length - 1]] = values[i];

//     for (let j = path.length - 2; j >= 0; j--) {
//       let localElement = { ...element };
//       if (path[j].includes('[') || path[j].includes(']')) {
//         //create array
//         let fixPath = path[j].split('[')[0];
//         let index = path[j].split('[')[1].replace(']', '');
//         element = { ...toCompare };
//         element[fixPath] = [];
//         element[fixPath[index]] = [localElement];
//       } else {
//         //create object
//         element = { ...toCompare };
//         element[path[j]] = localElement;
//       }
//     }
//     toCompare = JSON.parse(JSON.stringify(element));

//     result.push(element);
//   }

//   return toCompare;
// } // wasted , finish tomorrow

// function zipObjectDeep(props, values) {
//   if (props.length < 2) return { props: value };
//   let propsBla = props[0].split('.');

//   let obj = {};
//   obj[propsBla[propsBla.length - 1]] = values[0];

//   for (let i = propsBla.length - 2; i >= 0; i--) {}
//   return obj;
// }

// function zipObjectDeep(props, values) {
//   let result = {};

//   for (let i = 0; i < props.length; i++) {
//     let element = props[i].split('.');
//     for (let j = 0; j < element.length; j++) {
//       if (element[j].includes('[')) {
//         let key = element[j].split('[')[0];
//         if (!result.hasOwnProperty(key)) {
//           result[key] = [undefined];
//         }
//       } else {
//         if (!result.hasOwnProperty(element[j])) {
//           result[element[j]] = { undefined };
//         }
//       }
//     }
//   }

//   return result;
// }

// const iteration = tree => {
//   if (!tree.length) {
//     return 0;
//   }
//   const stack = [];
//   let sum = 0;
//   tree.forEach(node => {
//     stack.push(node);
//   });
//   while (stack.length) {
//     const node = stack.pop();
//     sum += node.v;
//     if (node.c) {
//       node.c.forEach(n => {
//         stack.push(n);
//       });
//     }
//   }
//   return sum;
// };

// console.log(iteration(tree));

// const recursive = tree => {
//   let sum = 0;
//   tree.forEach(node => {
//     sum += node.v;
//     if (!node.c) {
//       return node.v;
//     }
//     sum += recursive(node.c);
//   });
//   return sum;
// };

// const zipObjectDeep = (props, values) => {
//   let result = {}

//   for (let i = 0; i < props.length; i++) {
//     let el = props[i].split('.')
//     el.forEach(element => {
//       if (!result[el]) {
//         result[el]
//       }
//     })
//   }
// }

// function zipObjectDeep(props, value) {
//   let obj = {};

//   for (let i = 0; i < props.length; i++) {
//     // 1) отщипнуть последний элемент из пропс и ебнуть ему значение value соответствующее
//     let elems = props[i].split('.');
//     let lastElem = elems.pop();

//     let currentRoot = {};
//     currentRoot[lastElem] = value[i];

//     while (elems.length) {
//       // 2) return остаток отправить рекурсией в функцию, принимающую массив говна (a.b[0]) и хуйню, которую впихнуть в value объекта
//       console.log(helper(elems.pop(), currentRoot));
//     }
//     console.log('elems ', elems);
//     console.log('currentRoot ', currentRoot);
//     // 3) делать это пока длина говна не станет 0
//   }
// }

// function helper(props, value) {
//   let obj = {};
//   obj[props] = value;
//   return obj;
// }

console.log(zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])); // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
