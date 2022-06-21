export const high = (str: string): string => {
  let arr = str.split(' ');
  let maxWeight = 0;
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    let weight = [...arr[i]].reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0);
    if (weight > maxWeight) {
      maxWeight = weight;
      result = arr[i];
    }
  }

  return result;
};
