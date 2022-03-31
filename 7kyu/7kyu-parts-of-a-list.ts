function partlist(arr: string[]): string[] {
  let array = [];
  for (let i = 0; i < arr.length - 1; i++) {
    array.push([arr.slice(0, i + 1).join(' ')]);
    array[i][1] = arr.slice(i + 1).join(' ');
  }
  return array;
}

//!
var partlist1 = (a: string[]): string[][] => a.map((v, i) => [a.slice(0, i).join(' '), a.slice(i).join(' ')]).slice(1);

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come'])); /* [
  ['I', "wish I hadn't come"],
  ['I wish', "I hadn't come"],
  ['I wish I', "hadn't come"],
  ["I wish I hadn't", 'come'],
]); */
console.log(partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])); /* [
  ['cdIw', 'tzIy xDu rThG'],
  ['cdIw tzIy', 'xDu rThG'],
  ['cdIw tzIy xDu', 'rThG'],
]); */
console.log(partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])); /* [
  ['vJQ', 'anj mQDq sOZ'],
  ['vJQ anj', 'mQDq sOZ'],
  ['vJQ anj mQDq', 'sOZ'],
]); */
