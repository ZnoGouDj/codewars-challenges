function recycle(array) {
  let bin: string[][] = [[], [], [], []];

  let match = {
    paper: 0,
    glass: 1,
    organic: 2,
    plastic: 3,
  };

  for (let i = 0; i < array.length; i++) {
    bin[match[array[i].material]].push(array[i].type);
    if (array[i].secondMaterial) bin[match[array[i].secondMaterial]].push(array[i].type);
  }

  return bin;
}

function recycle1(array) {
  let materials = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  array.forEach((o) => {
    materials[o.material].push(o.type);
    if (o.secondMaterial) materials[o.secondMaterial].push(o.type);
  });
  return Object.values(materials);
}

let a = [
  {
    type: 'rotten apples',
    material: 'organic',
  },
  {
    type: 'out of date yogurt',
    material: 'organic',
    secondMaterial: 'plastic',
  },
  {
    type: 'wine bottle',
    material: 'glass',
    secondMaterial: 'paper',
  },
  {
    type: 'amazon box',
    material: 'paper',
  },
  {
    type: 'beer bottle',
    material: 'glass',
    secondMaterial: 'paper',
  },
];
let b = [
  ['wine bottle', 'amazon box', 'beer bottle'],
  ['wine bottle', 'beer bottle'],
  ['rotten apples', 'out of date yogurt'],
  ['out of date yogurt'],
];
console.log(recycle(a)); // b
