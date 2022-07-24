function formatDuration(seconds) {
  const time = {
    year: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
  };

  const result: string[] = [];

  while (seconds) {
    if (seconds / 60 / 60 / 24 / 365 >= 1) {
      time.year = String(Math.floor(seconds / 60 / 60 / 24 / 365));
      seconds -= +time.year * 60 * 60 * 24 * 365;
    } else if (seconds / 60 / 60 / 24 >= 1) {
      time.day = String(Math.floor(seconds / 60 / 60 / 24));
      seconds -= +time.day * 60 * 60 * 24;
    } else if (seconds / 60 / 60 >= 1) {
      time.hour = String(Math.floor(seconds / 60 / 60));
      seconds -= +time.hour * 60 * 60;
    } else if (seconds / 60 >= 1) {
      time.minute = String(Math.floor(seconds / 60));
      seconds -= +time.minute * 60;
    } else {
      time.second = seconds;
      seconds -= seconds;
    }
  }

  for (let key in time) {
    if (time[key] && time[key] > 1) {
      result.push(time[key] + ` ${key}s`);
    } else if (time[key] && time[key] === 1) {
      result.push(time[key] + ` ${key}`);
    }
  }

  return result.join('').length ? result.join(', ').replace(/,([^,]*)$/, ' and$1') : 'now';
}

console.log(formatDuration(1)); // => "1 second"
console.log(formatDuration(62)); // => "1 minute and 2 seconds"
console.log(formatDuration(120)); // => "2 minutes"
console.log(formatDuration(3600)); // => "1 hour"
console.log(formatDuration(3662)); // => "1 hour, 1 minute and 2 seconds"
