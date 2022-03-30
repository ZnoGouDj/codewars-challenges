/*
In this game, the hero moves from left to right. 
The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

const move = (position: N, roll: N): N => position + roll * 2;

//another mine (FASTER!)

function move1(position: N, roll: N): N {
  return position + roll * 2;
}
