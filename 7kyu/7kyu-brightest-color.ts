function brightest(colors) {
  let results: number[] = [];
  for (let i = 0; i < colors.length; i++) {
    let rgb = colors[i]
      .slice(1)
      .match(/.{1,2}/g)
      .map((val) => parseInt(val, 16));
    results.push(Math.max(...rgb));
  }
  return colors[results.indexOf(Math.max(...results))];
}

console.log(brightest(['#001000', '#000000'])); // => '#001000'
console.log(brightest(['#ABCDEF', '#123456'])); // => '#ABCDEF'
console.log(brightest(['#00FF00', '#FFFF00'])); // => '#00FF00'
console.log(brightest(['#FFFFFF', '#1234FF'])); // => '#FFFFFF'
console.log(brightest(['#FFFFFF', '#123456', '#000000'])); // => '#FFFFFF'
