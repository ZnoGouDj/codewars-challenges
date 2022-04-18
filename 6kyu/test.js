const stat = strg => {
  const arr = strg.split(', ');
  const seconds = arr.map(el => timeToSeconds(el));
  seconds.sort((a, b) => a - b);

  const range = secondsToTime(seconds[seconds.length - 1] - seconds[0]);
  const average = secondsToTime(Math.floor(seconds.reduce((a, b) => a + b, 0) / seconds.length));
  const median = secondsToTime(
    seconds.length % 2 !== 0
      ? seconds[Math.floor(seconds.length / 2)]
      : (seconds[seconds.length / 2 - 1] + seconds[seconds.length / 2]) / 2
  );

  return `Range: ${range} Average: ${average} Median: ${median}`;
};

const timeToSeconds = time => {
  let split = time.split('|');
  return +split[2] + +split[1] * 60 + +split[0] * 60 * 60;
};

const secondsToTime = sec => {
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  return `${n(hours)}|${n(minutes)}|${n(seconds)}`;
};

const n = n => {
  return n > 9 ? '' + n : '0' + n;
};

console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')); // 'Range: 01|01|18 Average: 01|38|05 Median: 01|32|34'
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')); // 'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00'
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17')); // 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57'
