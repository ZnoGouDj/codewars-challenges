function race(v1, v2, g) {
  console.log('v1 ', v1);
  console.log('v2 ', v2);
  console.log('g ', g);
  if (v1 > v2) return null;

  let distancePerSecondV1 = v1 / 60 / 60;
  let distancePerSecondV2 = v2 / 60 / 60;

  let difference = distancePerSecondV2 - distancePerSecondV1;
  let secondsToMeet = (g / difference).toFixed(10);
  console.log('check ', secondsToMeet);

  let hours = Math.floor(secondsToMeet / 60 / 60);
  let minutes =
    hours > 0 ? Math.floor((secondsToMeet - hours * 60 * 60) / 60) : Math.floor(secondsToMeet / 60);
  let seconds = Math.floor(secondsToMeet - hours * 60 * 60 - minutes * 60);

  return [hours, minutes, seconds];
}

console.log(race(720, 850, 70)); // => [0, 32, 18]
console.log(race(80, 91, 37)); // => [3, 21, 49]
console.log(race(80, 100, 40)); // => [2, 0, 0]
console.log(race(720, 850, 37)); // => [0, 17, 4]
