export const race = (v1: number, v2: number, g: number) => {
  if (v1 > v2) return null;

  let distancePerSecondV1 = v1 / 60 / 60;
  let distancePerSecondV2 = v2 / 60 / 60;

  let difference = distancePerSecondV2 - distancePerSecondV1;
  let secondsToMeet = (g / difference).toFixed(10);

  let hours = Math.floor(+secondsToMeet / 60 / 60);
  let minutes =
    hours > 0
      ? Math.floor((+secondsToMeet - hours * 60 * 60) / 60)
      : Math.floor(+secondsToMeet / 60);
  let seconds = Math.floor(+secondsToMeet - hours * 60 * 60 - minutes * 60);

  return [hours, minutes, seconds];
};

export class G964 {
  public static race = (v1, v2, g) => {
    if (v1 >= v2) {
      return null;
    }
    let time = new Date(((-1 * g) / (v1 - v2)) * 3600000);
    if (time.getMilliseconds() === 999) {
      time.setMilliseconds(1000);
    }
    return [time.getHours(), time.getMinutes(), time.getSeconds()];
  };
}
