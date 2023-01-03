function mazeRunner(maze, directions) {
  let currentCoords;
  let maxSize = maze[0].length - 1;

  for (let i = 0; i < maze.length; i++) {
      if (maze[i].includes(2)) {
          currentCoords = [i, maze[i].indexOf(2)];
      }
  }

  for (let i = 0; i < directions.length; i++) {
      if (directions[i] === 'N') {
          currentCoords[0]--;
      } else if (directions[i] === 'S') {
          currentCoords[0]++;
      } else if (directions[i] === 'W') {
          currentCoords[1]--;
      } else if (directions[i] === 'E') {
          currentCoords[1]++;
      }
    
    
      if (checkIfDead(currentCoords, maxSize, maze)) {
        return 'Dead';
      }

      if (checkIfFinish(currentCoords, maze)) {
          return 'Finish';
      }

      if (checkIfLost(currentCoords, directions.length - 1 === i, maze)) {
          return 'Lost';
      }
  }

  return 'Finish';
}

function checkIfDead(coords, maxSize, maze) {
  return coords[0] < 0 || coords[0] > maxSize || coords[1] < 0 || coords[1] > maxSize || maze[coords[0]][coords[1]] === 1;
}

function checkIfLost(coords, isFinished, maze) {
  return maze[coords[0]][coords[1]] !== 3 && isFinished;
}

function checkIfFinish(coords, maze) {
  return maze[coords[0]][coords[1]] === 3;
}

var maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]
];

var maze1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
]

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])) // => "Finish", "Expected Finish"
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"])) // => "Finish", "Expected Finish"
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"])) // => "Finish", "Expected Finish"

console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"])) // => "Dead", "Expected Dead"
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"])) // => "Dead", "Expected Dead"

console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"])) // => "Lost", "Expected Lost"

//!

console.log(mazeRunner(maze1, [ 'N', 'W', 'W', 'W', 'W' ])) // => 'Dead'