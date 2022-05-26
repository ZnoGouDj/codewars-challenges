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
//         console.log(fixPath[index]);
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

function zipObjectDeep(props, values) {
  if (props.length < 2) return { props: value };
  let propsBla = props[0].split('.');

  let obj = {};
  obj[propsBla[propsBla.length - 1]] = values[0];

  for (let i = propsBla.length - 2; i >= 0; i--) {}
  return obj;
}

console.log(zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])); // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
// > obj['a']['b'][0]['c']
