function generateName() {
  let name = '';

  do {
    let nameL = '';
    for (let i = 0; i < 6; i++) {
      nameL += String.fromCharCode(randomIntFromInterval(65, 90));
    }
    name = nameL;
  } while (photoManager.nameExists(name));

  return name;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//!

function generateName1() {
  function* randomNames() {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (true) {
      yield Array(6)
        .fill(0)
        .map(ch => alpha[Math.floor(Math.random() * 52)])
        .join('');
    }
  }
  let name = randomNames().next().value;
  return photoManager.nameExists(name) ? generateName1() : name;
}
