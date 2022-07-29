function reverse(str) {
  const result: string[] = [];
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    } else {
      result.push([...arr[i]].reverse().join(''));
    }
  }

  return result.join(' ').trim();
}

console.log(reverse('Reverse this string, please!')); // =>  "Reverse siht string, !esaelp"
console.log(reverse("I really don't like reversing strings!")); // => "I yllaer don't ekil reversing !sgnirts"
