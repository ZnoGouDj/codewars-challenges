function WhatIsTheTime(timeInMirror) {
  let time = timeInMirror.split(':');

  let minutes = 60 - time[1];
  if (minutes < 10) minutes = '0' + minutes;
  if (minutes > 59) minutes = '00';

  let hours = minutes == 0 ? 12 - time[0] : 11 - time[0];
  if (hours == 0) hours = 12;
  if (hours < 0) hours = 11;
  if (hours < 10) hours = '0' + hours;

  return hours + ':' + minutes;
}

//!

let WhatIsTheTime = t => {
  let [h, m] = t.split(':');
  h = (+m ? 11 : 12) - (h % 12) || 12;
  m = (60 - m) % 60;
  return [h, m].map(e => (e > 9 ? e : '0' + e)).join(':');
};

console.log(WhatIsTheTime('06:35')); // '05:25'
console.log(WhatIsTheTime('11:59')); // '12:01'
console.log(WhatIsTheTime('12:02')); // '11:58'
console.log(WhatIsTheTime('04:00')); // '08:00'
console.log(WhatIsTheTime('06:00')); // '06:00'
console.log(WhatIsTheTime('12:00')); // '12:00'
