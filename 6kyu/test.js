function sortTheInnerContent(words) {
  let arr = words.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let firstLetter = arr[i].substring(0, 1);
    let lastLetter = arr[i].substring(arr[i].length - 1, arr[i].length);
    let middleToSort = arr[i].substring(1, arr[i].length - 1).split('');

    middleToSort.sort().reverse();

    result.push(firstLetter + middleToSort.join('') + lastLetter);
  }

  return result;
}

console.log(sortTheInnerContent('sort the inner content in descending order')); //'srot the inner ctonnet in dsnnieedcg oredr'
console.log(sortTheInnerContent('wait for me')); // 'wiat for me'
console.log(sortTheInnerContent('this kata is easy')); // 'tihs ktaa is esay'
