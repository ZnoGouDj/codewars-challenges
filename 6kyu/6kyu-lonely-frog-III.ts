function jumpTo(x: number, y: number): number {
  let steps = 0;
  let points = y;

  for (let i = 0; i < y; i++) {
    if (points === x) {
      return steps;
    }

    points % 2 === 0 && points / 2 >= x ? (points /= 2) : points--;

    steps++;
  }
}

/*

For x = 1, y = 17, the output should be 5.

 step  from    to      action
  1:     1  --> 2     forward(or double)
  2:     2  --> 4       double
  3:     4  --> 8       double
  4:     8  --> 16      double
  5:     16 --> 17     forward

For x = 1, y = 15, the output should be 6.

 step  from    to      action
  1:     1  --> 2      forward(or double)
  2:     2  --> 3      forward
  3:     3  --> 6      double
  5:     6  --> 7      forward
  6:     7  --> 14     double
  7:     14 --> 15     forward

*/
