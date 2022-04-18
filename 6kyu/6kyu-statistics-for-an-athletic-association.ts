export class G964 {
  public static stat = (strg: string): string => {
    if (!strg) return '';

    const timeToSeconds = (time: string) => {
      let split = time.split('|');
      return +split[2] + +split[1] * 60 + +split[0] * 60 * 60;
    };

    const secondsToTime = (sec: number): string => {
      let hours = Math.floor(sec / 3600);
      let minutes = Math.floor((sec - hours * 3600) / 60);
      let seconds = sec - hours * 3600 - minutes * 60;
      return `${n(hours)}|${n(minutes)}|${n(seconds)}`;
    };

    const n = (n: number): string => {
      return n > 9 ? '' + n : '0' + n;
    };

    const arr = strg.split(', ');
    const seconds = arr.map(el => timeToSeconds(el));
    seconds.sort((a, b) => a - b);

    const range = secondsToTime(seconds[seconds.length - 1] - seconds[0]);
    const average = secondsToTime(Math.floor(seconds.reduce((a, b) => a + b, 0) / seconds.length));
    const median = secondsToTime(
      Math.floor(
        seconds.length % 2 !== 0
          ? seconds[Math.floor(seconds.length / 2)]
          : (seconds[seconds.length / 2 - 1] + seconds[seconds.length / 2]) / 2
      )
    );

    return `Range: ${range} Average: ${average} Median: ${median}`;
  };
}

//!

export class G9641 {
  public static stat = strg => {
    let result = '';
    if (strg === '') return result;

    //Convertion input to array of seconds
    const secsArray = strg
      .split(', ')
      .map(t => t.split('|'))
      .map(x => x.reduce((acc, time) => 60 * acc + +time, 0))
      .sort((a, b) => a - b);
    const middle = Math.floor(secsArray.length / 2);

    //Calculating required results
    const range = Math.max(...secsArray) - Math.min(...secsArray);
    const mean = Math.floor(secsArray.reduce((a, b) => a + b) / secsArray.length);
    const median = Math.floor(
      secsArray.length % 2 === 0 ? (secsArray[middle - 1] + secsArray[middle]) / 2 : secsArray[middle]
    );

    //Printing output
    result += `Range: ${new Date(range * 1000).toISOString().substr(11, 8).replace(/:/g, '|')}`;
    result += ` Average: ${new Date(mean * 1000).toISOString().substr(11, 8).replace(/:/g, '|')}`;
    result += ` Median: ${new Date(median * 1000).toISOString().substr(11, 8).replace(/:/g, '|')}`;

    return result;
  };
}

//? this. wont work??

export class G9642 {
  private static time2snd = s => {
    var arr = s.split('|').map(function (x) {
      return ~~x;
    });
    var snd = 3600 * arr[0] + 60 * arr[1] + arr[2];
    return snd;
  };

  private static pad = (num, size) => {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  };

  private static snd2time = m => {
    var n = ~~m;
    var h = Math.floor(m / 3600);
    var re = m % 3600;
    var mn = Math.floor(re / 60);
    var s = re % 60;
    return G9642.pad(h, 2) + '|' + G9642.pad(mn, 2) + '|' + G9642.pad(s, 2);
  };

  public static stat = strg => {
    if (strg === '') return '';
    var r = strg
      .split(',')
      .map(function (x) {
        return G9642.time2snd(x);
      })
      .sort(function (a, b) {
        return a - b;
      });
    var lg = r.length;
    var avg = ~~(
      r.reduce(function (s, x) {
        return s + x;
      }) / lg
    );
    var rge = ~~(r[lg - 1] - r[0]);
    var md = ~~((r[~~((lg - 1) / 2)] + r[~~(lg / 2)]) / 2);
    return 'Range: ' + G9642.snd2time(rge) + ' Average: ' + G9642.snd2time(avg) + ' Median: ' + G9642.snd2time(md);
  };
}
