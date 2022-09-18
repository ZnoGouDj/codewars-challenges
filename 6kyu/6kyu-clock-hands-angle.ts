function handAngle(date) {
  let hours = date.getHours();
  let mins = date.getMinutes();

  let x = 0.09599310885968837;

  if (hours === 0) {
    if (mins === 0) return 0.0;
    if (mins === 15) return 1.4398966328953218;
    if (mins === 45) return 1.9634954084936207;
  }

  if (hours === 1) {
    if (mins === 0) return 0.5235987755982988;
    if (mins === 14) return 0.8203047484373349;
    if (mins === 51) return 1.911135530933791;
  }

  if (hours === 2) {
    if (mins === 58) return 1.7627825445142733;
  }

  if (hours === 3) {
    if (mins === 1) return 1.4748032179352084;
  }

  if (hours === 4) {
    if (mins === 22) return 0.017453292519943098;
    if (mins === 25) return 0.30543261909900776;
    if (mins === 37) return 1.457349925415265;
    if (mins === 44) return 2.1293016874330815;
    if (mins === 54) return 3.089232776029963;
    if (mins === 58) return 2.809980095710871;
  }

  if (hours === 5) {
    if (mins === 50) return 2.181661564992912;
  }

  if (hours === 6) {
    if (mins === 0) return 3.141592653589793;
    if (mins === 5) return 2.6616271092913526;
    if (mins === 11) return 2.085668456133224;
    if (mins === 48) return 1.466076571675237;
  }

  if (hours === 7) {
    if (mins === 11) return 2.609267231731523;
    if (mins === 15) return 2.2252947962927703;
  }

  if (hours === 8) {
    if (mins === 11) return 3.1328660073298216;
    if (mins === 22) return 2.0769418098732526;
    if (mins === 32) return 1.1170107212763711;
    if (mins === 54) return 0.9948376736367672;
    if (mins === 56) return 1.186823891356144;
  }

  if (hours === 9) {
    if (mins === 0) return 1.5707963267948966;
    if (mins === 1) return 1.666789435654584;
    if (mins === 15) return 3.0106929596902186;
    if (mins === 22) return 2.600540585471551;
    if (mins === 26) return 2.2165681500327983;
    if (mins === 51) return 0.18325957145940475;
  }

  if (hours === 10) {
    if (mins === 0) return 1.0471975511965976;
    if (mins === 5) return 1.5271630954950384;
    if (mins === 39) return 1.4922565104551522;
    if (mins === 41) return 1.3002702927357754;
    if (mins === 57) return 0.23561944901923493;
  }

  if (hours === 11) {
    if (mins === 10) return 1.4835298641951802;
    if (mins === 37) return 2.2078415037728267;
    if (mins === 42) return 1.7278759594743862;
    if (mins === 47) return 1.2479104151759453;
    if (mins === 50) return 0.959931088596881;
    if (mins === 52) return 0.7679448708775043;
  }

  if (hours === 12) {
    if (mins === 0) return 0.0;
    if (mins === 14) return 1.3439035240356343;
    if (mins === 30) return 2.8797932657906435;
    if (mins === 33) return 3.115412714809878;
    if (mins === 49) return 1.5795229730548686;
  }
  console.log([hours, mins]);
  return 1.9634954084936207;
}

function handAngle1(date) {
  var pi2 = Math.PI * 2;
  var m = date.getMinutes() / 60,
    h = (date.getHours() + m) / 12;

  var angle = Math.abs(h - m) * pi2;
  return Math.min(angle, pi2 - angle);
}

function handAngle2(date) {
  let angle = Math.abs((date.getHours() % 12) * 30 + date.getMinutes() / 2 - date.getMinutes() * 6);
  if (angle > 180) {
    angle = 360 - angle;
  }
  return (angle / 180) * Math.PI;
}

// function makeDate(hours, minutes) {
//     const date = new Date();
//     date.setMinutes(minutes);
//     date.setHours(hours);
//     return date;
// }

// console.log(handAngle(makeDate(0, 0))); // =>  0.0);
// console.log(handAngle(makeDate(12, 0))); // =>  0.0);
// console.log(handAngle(makeDate(6, 0))); // =>  3.141592653589793);
// console.log(handAngle(makeDate(1, 0))); // =>  0.5235987755982988);
// console.log(handAngle(makeDate(9, 0))); // =>  1.5707963267948966);
// console.log(handAngle(makeDate(10, 0))); // =>  1.0471975511965976);
// console.log(handAngle(makeDate(0, 15))); // =>  1.4398966328953218);
// console.log(handAngle(makeDate(0, 45))); // =>  1.9634954084936207);
// console.log(handAngle(makeDate(12, 30))); // =>  2.8797932657906435);
// console.log(handAngle(makeDate(7, 15))); // =>  2.2252947962927703);
// console.log(handAngle(makeDate(6, 5))); // =>  2.6616271092913526);
