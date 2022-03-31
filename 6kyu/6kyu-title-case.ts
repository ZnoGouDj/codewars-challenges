function titleCase(title: string, minorWords: string): string {
  if (!minorWords)
    return title
      .split(' ')
      .map(el => capitalizeFirstLetter(el))
      .join(' ');

  let arr = title.split(' ');
  let minorArr = minorWords.split(' ');
  let result = [capitalizeFirstLetter(arr[0])];

  let match: boolean;

  for (let i = 1; i < arr.length; i++) {
    match = false;
    for (let j = 0; j < minorArr.length; j++) {
      if (arr[i].toLowerCase() === minorArr[j].toLowerCase()) {
        match = true;
        result.push(arr[i].toLowerCase());
      }
    }
    if (!match) {
      result.push(capitalizeFirstLetter(arr[i]));
    }
  }

  return result.join(' ');
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // should return: 'The Wind in the Willows'
// console.log(titleCase('the quick brown fox')); // should return: 'The Quick Brown Fox')
