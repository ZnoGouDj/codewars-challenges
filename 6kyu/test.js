function streetFighterSelection(fighters, position, moves) {
  let result = [];
  let initX = position[0];
  let initY = position[1];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'up') {
      if (initX - 1 >= 0) {
        initX--;
      }
    } else if (moves[i] === 'down') {
      if (initX + 1 <= 1) {
        initX++;
      }
      initX++;
    } else if (moves[i] === 'left') {
      if (initY - 1 < 0) {
        initY = fighters[0].length - 1;
      } else {
        initY--;
      }
    } else if (moves[i] === 'right') {
      if (initY + 1 > fighters[0].length - 1) {
        initY = 0;
      } else {
        initY++;
      }
    }
    result.push(fighters[initX][initY]);
  }

  return result;
}

let fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
let initial_position = [0, 0];
let moves = ['up', 'left', 'right', 'left', 'left'];

console.log(streetFighterSelection(fighters, initial_position, moves)); // => ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'];
